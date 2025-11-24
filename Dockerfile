FROM node:20-alpine AS base

# Create app directory
WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# Copy the rest of the app
COPY public ./public
COPY server.js .

# Expose port for Coolify/containers
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]

