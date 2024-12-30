# Build stage
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18

# Set working directory
WORKDIR /app

# Copy built files and dependencies
COPY --from=build /app /app

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]