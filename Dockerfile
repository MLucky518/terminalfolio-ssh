# Base image with Go
FROM golang:1.22

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest

# Set working dir
WORKDIR /app

# Copy Go app and frontend folder
COPY . .

# Install frontend dependencies
RUN cd terminalfolio && npm install

# Build or prep anything else if needed...

# Expose port for SSH
EXPOSE 2222

# Run the Go server
CMD ["go", "run", "main.go"]
