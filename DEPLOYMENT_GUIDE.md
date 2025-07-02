# Guía de Despliegue para Museo API en un Servidor VPS

Este documento proporciona instrucciones detalladas sobre cómo desplegar la aplicación Museo API en un servidor VPS.

## Requisitos Previos

### Requisitos del Servidor
- Un servidor VPS con al menos:
  - 2 GB de RAM
  - 1 CPU
  - 20 GB de espacio en disco
- Sistema operativo: Ubuntu 20.04 LTS o superior
- Acceso SSH al servidor

### Software Requerido
- Node.js (versión 18.x o superior)
- PNPM (versión 7.x o superior)
- MongoDB (versión 5.x o superior)
- Nginx (como proxy inverso)
- PM2 (para gestionar procesos de Node.js)

## Información Necesaria para el Despliegue

### Información que Necesitas del Gestor del VPS
1. **Credenciales de acceso al servidor**:
   - Dirección IP del servidor
   - Nombre de usuario SSH
   - Contraseña SSH o archivo de clave privada
   - Puerto SSH (generalmente 22)

2. **Información sobre recursos asignados**:
   - Cantidad de RAM disponible
   - Número de CPUs
   - Espacio en disco disponible
   - Ancho de banda asignado

3. **Información sobre el sistema operativo**:
   - Versión del sistema operativo instalado
   - Cualquier restricción o política específica del proveedor

### Información que Debes Proporcionar al Gestor del VPS
1. **Requisitos de puertos**:
   - Puerto 80 (HTTP) y 443 (HTTPS) abiertos para acceso web
   - Puerto para MongoDB (27017) protegido y solo accesible localmente
   - Puerto para la aplicación NestJS (5001 por defecto, según la configuración)

2. **Requisitos de software**:
   - Versiones específicas de Node.js, MongoDB, etc.
   - Cualquier dependencia adicional necesaria

3. **Requisitos de dominio y SSL**:
   - Nombre de dominio que se utilizará
   - Si se requiere un certificado SSL (recomendado)

## Pasos de Despliegue

### 1. Configuración Inicial del Servidor

```bash
# Actualizar el sistema
sudo apt update
sudo apt upgrade -y

# Instalar dependencias básicas
sudo apt install -y curl git build-essential

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalación de Node.js
node -v
npm -v

# Instalar PNPM
npm install -g pnpm

# Instalar PM2 globalmente
npm install -g pm2
```

### 2. Instalación y Configuración de MongoDB

```bash
# Importar la clave pública de MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

# Crear archivo de lista para MongoDB
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

# Actualizar e instalar MongoDB
sudo apt update
sudo apt install -y mongodb-org

# Iniciar y habilitar MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verificar que MongoDB está funcionando
sudo systemctl status mongod
```

### 3. Configuración de Nginx

```bash
# Instalar Nginx
sudo apt install -y nginx

# Iniciar y habilitar Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

Crear configuración de Nginx para la aplicación:

```bash
sudo nano /etc/nginx/sites-available/museo-api
```

Añadir la siguiente configuración:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activar la configuración:

```bash
sudo ln -s /etc/nginx/sites-available/museo-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Configuración de SSL (Opcional pero Recomendado)

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d tu-dominio.com

# Verificar renovación automática
sudo certbot renew --dry-run
```

### 5. Despliegue de la Aplicación

```bash
# Crear directorio para la aplicación
sudo mkdir -p /var/www/museo-api
sudo chown -R $USER:$USER /var/www/museo-api

# Clonar el repositorio
cd /var/www/museo-api
git clone <URL_DEL_REPOSITORIO> .

# Instalar dependencias
pnpm install

# Crear archivo .env
nano .env
```

Añadir las siguientes variables de entorno al archivo .env (ajustar según sea necesario):

```
## SERVER ENVIRONMENT
APP_PORT="5001"

## DB ENVIRONMENT
DB_URI="mongodb://localhost:27017/museo-bd?retryWrites=true&readPreference=primary"

## JWT ENVIRONMENT
JWT_SECRET="<tu_jwt_secret_seguro>"
JWT_EXPIRATION_TIME="300d"
JWT_REFRESH_TOKEN_SECRET="<tu_refresh_token_secret_seguro>"
JWT_REFRESH_EXPIRATION_TIME="1000d"

## ACTIVATION ENVIRONMENT
JWT_ACTIVATION_TOKEN_SECRET="<tu_activation_token_secret_seguro>"
JWT_ACTIVATION_TOKEN_EXPIRATION_TIME="5m"

## EMAIL ENVIRONMENT
EMAIL_HOST="<smtp_host>"
EMAIL_PORT="465"
EMAIL_USER="<email_user>"
EMAIL_PASS="<email_password>"
EMAIL_FROM="<email_from>"

## Frontend API URL
API_FRONT="https://tu-dominio-frontend.com"
```

Construir y ejecutar la aplicación:

```bash
# Construir la aplicación
pnpm run build

# Configurar PM2 para iniciar la aplicación
pm2 start dist/main.js --name museo-api

# Configurar PM2 para iniciar automáticamente en el arranque
pm2 startup
pm2 save
```

### 6. Configuración de Datos Iniciales

```bash
# Ejecutar script para crear datos iniciales
cd /var/www/museo-api
pnpm run create:all-defaults
```

## Mantenimiento y Monitoreo

### Monitoreo con PM2

```bash
# Ver estado de la aplicación
pm2 status

# Ver logs
pm2 logs museo-api

# Reiniciar la aplicación
pm2 restart museo-api
```

### Respaldo de la Base de Datos

```bash
# Crear directorio para backups
mkdir -p /var/backups/mongodb

# Crear backup
mongodump --out /var/backups/mongodb/$(date +"%Y-%m-%d")

# Restaurar backup (si es necesario)
mongorestore /var/backups/mongodb/YYYY-MM-DD
```

## Solución de Problemas Comunes

### La aplicación no inicia
- Verificar logs: `pm2 logs museo-api`
- Verificar variables de entorno: `cat /var/www/museo-api/.env`
- Verificar conexión a MongoDB: `mongo --eval "db.adminCommand('ping')"`

### Problemas de conexión a la base de datos
- Verificar que MongoDB está en ejecución: `sudo systemctl status mongod`
- Verificar la cadena de conexión en el archivo .env

### Problemas con Nginx
- Verificar configuración: `sudo nginx -t`
- Verificar logs: `sudo tail -f /var/log/nginx/error.log`

## Actualización de la Aplicación

```bash
# Navegar al directorio de la aplicación
cd /var/www/museo-api

# Obtener los últimos cambios
git pull

# Instalar dependencias (si hay cambios)
pnpm install

# Reconstruir la aplicación
pnpm run build

# Reiniciar la aplicación
pm2 restart museo-api
```

## Información de Seguridad

- Mantén todas las contraseñas y tokens secretos seguros
- Actualiza regularmente el sistema operativo y todas las dependencias
- Considera implementar un firewall (UFW) para restringir el acceso
- Configura MongoDB para que solo acepte conexiones locales
- Utiliza HTTPS para todas las comunicaciones externas

## Recursos Adicionales

- [Documentación de NestJS](https://docs.nestjs.com/)
- [Documentación de MongoDB](https://docs.mongodb.com/)
- [Documentación de PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Documentación de Nginx](https://nginx.org/en/docs/)