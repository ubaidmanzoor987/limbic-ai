FROM node:16-alpine

# Create app directory
RUN mkdir -p /usr/src/app

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files into the container
COPY package*.json /usr/src/app/

# Installing dependencies
RUN npm install --force

# Copying source files
COPY . /usr/src/app

# Copy the .env file or any other configuration files you need
COPY .env .

# Building app
RUN npm run build

# Expose the port app runs on
EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]
