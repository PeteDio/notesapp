# Stage 1: Development
FROM node:alpine AS development

# Set environment variables
ENV CI=true
ENV PORT=3000

# Set the working directory inside the container
WORKDIR /code

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Stage 2: Builder
FROM development AS builder

# Build the application with Vite
RUN npm run build

# Stage 3: Final
FROM node:alpine AS final

# Set the working directory inside the container
WORKDIR /code

# Copy the built files from the builder stage to the final stage
COPY --from=builder /code/build ./build

# Expose port 3000 (adjust if needed)
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "preview"]