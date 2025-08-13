#!/bin/bash
set -e

APP_DIR="/var/www/museo-api"  		 # Ruta del repo NestJS
DOMAIN_OR_IP="10.0.0.5"                  # IP o dominio donde estará el backend
NEST_PORT=5000                           # Puerto donde corre NestJS (configúralo en main.ts si quieres otro)

echo "---- Actualizando sistema ----"
sudo apt update && sudo apt upgrade -y

# Instalar Node.js si no está
if command -v node >/dev/null 2>&1; then
  echo "Node.js ya está instalado, versión: $(node -v)"
else
  echo "Node.js no está instalado, instalando Node.js 20.x..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# Instalar pnpm si no está
if command -v pnpm >/dev/null 2>&1; then
  echo "pnpm ya está instalado, versión: $(pnpm -v)"
else
  echo "pnpm no está instalado, instalando pnpm globalmente..."
  sudo npm install -g pnpm
fi

# Instalar pm2 si no está
if command -v pm2 >/dev/null 2>&1; then
  echo "pm2 ya está instalado, versión: $(pm2 -v)"
else
  echo "pm2 no está instalado, instalando pm2 globalmente..."
  sudo npm install -g pm2
fi

echo "---- Actualizando código backend ----"
cd "$APP_DIR"
git pull

echo "---- Instalando dependencias y construyendo backend ----"
pnpm install
pnpm run build

echo "---- Ejecutando backend con pm2 ----"
# Cambia "start:prod" si usas otro script para producción
pm2 start pnpm --name nestjs-backend -- run start:prod
pm2 save
pm2 startup systemd -u $(whoami) --hp $(eval echo ~$USER)

echo "---- Configurando Nginx para proxy al backend ----"
NGINX_CONF="/etc/nginx/sites-available/museo-cpanel-backend"

sudo tee $NGINX_CONF > /dev/null <<EOL
server {
    listen 80;
    server_name $DOMAIN_OR_IP;

    location /api/ {
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

echo "---- Verificando configuración Nginx ----"
sudo nginx -t

echo "---- Reiniciando Nginx ----"
sudo systemctl reload nginx

echo "---- Despliegue backend NestJS completado! ----"
echo "Backend corriendo en http://$DOMAIN_OR_IP/api/"
