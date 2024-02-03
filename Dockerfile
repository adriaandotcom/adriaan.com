# Build Stage
FROM node:lts-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files into the docker image
COPY . .

# Build the application for production
RUN npm run build

# Production Stage
FROM node:lts-alpine AS production

# Set working directory
WORKDIR /app

# Set environment variable
ENV NODE_ENV=production

# Copy built assets from the builder stage
COPY --from=builder /app/.output ./.output

# Install only production dependencies
RUN npm install --ignore-scripts --omit=dev

# Define the command to run the application
CMD [ "node", "./.output/server/index.mjs" ]
