FROM node:16-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of application's code into the container
COPY . ./app

# Copy the .env file or any other configuration files you need
COPY .env .

# Building app
RUN npm run build

# Expose the port app runs on
EXPOSE 8000

# Command to run app
CMD ["npm", "run", "start"]
