#!/bin/bash
set -e

APP_DIR="/var/www/museo-api"             # Path to the NestJS repo
DOMAIN_OR_IP="10.0.0.5"                  # IP or domain where the backend will run
NEST_PORT=5000                           # Port where NestJS runs (configure in main.ts if different)

echo "---- Updating system ----"
sudo apt update && sudo apt upgrade -y

# Install Node.js if not installed
if command -v node >/dev/null 2>&1; then
  echo "Node.js is already installed, version: $(node -v)"
else
  echo "Node.js is not installed, installing Node.js 20.x..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# Install pnpm if not installed
if command -v pnpm >/dev/null 2>&1; then
  echo "pnpm is already installed, version: $(pnpm -v)"
else
  echo "pnpm is not installed, installing pnpm globally..."
  sudo npm install -g pnpm
fi

# Install pm2 if not installed
if command -v pm2 >/dev/null 2>&1; then
  echo "pm2 is already installed, version: $(pm2 -v)"
else
  echo "pm2 is not installed, installing pm2 globally..."
  sudo npm install -g pm2
fi

echo "---- Updating backend code ----"
cd "$APP_DIR"
git pull

echo "---- Installing dependencies and building backend ----"
pnpm install
pnpm run build

echo "---- Running backend with pm2 ----"
# Change "start:prod" if you use another production script

if pm2 list | grep -q nestjs-backend; then
    echo "Process nestjs-backend already exists, restarting..."
    pm2 delete nestjs-backend
    pm2 start pnpm --name nestjs-backend -- run start:prod
else
    echo "Starting new process frontend-next..."
    pm2 start pnpm --name nestjs-backend -- run start:prod
fi

pm2 save
# shellcheck disable=SC2046
# shellcheck disable=SC2086
pm2 startup systemd -u $(whoami) --hp $(eval echo ~$USER)

echo "---- Configuring Nginx as proxy to backend ----"
NGINX_CONF="/etc/nginx/sites-available/museo-cpanel-backend"

sudo tee $NGINX_CONF > /dev/null <<EOL
server {
    listen 80;
    server_name $DOMAIN_OR_IP;

    location / {
        proxy_pass http://localhost:$NEST_PORT/;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}
EOL

sudo ln -sf $NGINX_CONF /etc/nginx/sites-enabled/museo-cpanel-backend

echo "---- Checking Nginx configuration ----"
sudo nginx -t

echo "---- Restarting Nginx ----"
sudo systemctl reload nginx

echo "---- NestJS backend deployment completed! ----"
echo "Backend running at http://$DOMAIN_OR_IP/api/"