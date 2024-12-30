# Usar una imagen base de Node
FROM node:18

# Crear y definir el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "start"]