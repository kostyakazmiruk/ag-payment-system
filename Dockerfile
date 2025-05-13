# Dockerfile for API Gateway Service

FROM node:20

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy all service code
COPY . .

# If you need to build the application
RUN npm run build

# Expose the service port (adjust if needed)
EXPOSE 3000

# Start the service
CMD ["npm", "run", "start"]