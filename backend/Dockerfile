# syntax=docker/dockerfile:1.4

# Use a specific Node.js LTS version for consistency
FROM node:lts AS development

# Set working directory
WORKDIR /code

# Define Node environment
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Install dependencies
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci

# Install Mongoose
RUN npm install mongoose

# Copy source code
COPY . /code

# Start the application with Nodemon
CMD [ "nodemon", "index.js" ]


FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

