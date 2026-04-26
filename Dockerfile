# Use Node image
FROM node:22

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]