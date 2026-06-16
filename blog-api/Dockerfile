# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies in production mode
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start command
CMD ["npm", "start"]
