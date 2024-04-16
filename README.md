# Limbic AI - Project Setup Overview

This document outlines the setup and configuration for a web application project consisting of a Next.js frontend, a Node.js backend using TypeScript, and a PostgreSQL database. It details both Docker-based and non-Docker setups.

## Components

- **Frontend**: Next.js
- **Backend**: Node.js with TypeScript
- **Database**: PostgreSQL

## Docker Setup

### Starting with Docker

1. **Docker Compose**: Use `docker-compose` to orchestrate the containers for each service.
   - PostgreSQL is set up with an initialization script (`init-db.sql`) to configure the database schema and seed data.
   - Next.js and Node.js apps are built and run in their respective containers, ensuring they wait for the PostgreSQL database to be fully ready before starting.

### How to Run

- Execute `docker-compose up --build` in the terminal. This command builds the images and starts the containers defined in the `docker-compose.yml` file.

## Non-Docker Setup

### Backend Setup (Node.js with TypeScript)

1. **Installation**: Ensure Node.js is installed on your system.
2. **Dependencies**: Navigate to frontend and backend project directory and run `npm install` to install required packages.
3. **Running the Application**: Start the application with `npm run dev`.

### Frontend Setup (Next.js)

1. **Installation**: Ensure Node.js is installed on your system.
2. **Dependencies**: Navigate to your Next.js project directory and run `npm install`.
3. **Running the Application**: Start the development server with `npm run dev`.

### Database Setup (PostgreSQL)

1. **Installation**: Install PostgreSQL on your system.
2. **Database Creation**: Create a new database for your application.
3. **Initialization**: Use the `psql` command-line tool to execute your SQL schema and seed data scripts.

## Environment Configuration

- Configure environment variables for database connection details (`DATABASE_HOST`, `DATABASE_USER`, `DATABASE_PASSWORD`, etc.) in your backend application.
- For the frontend, setup any API endpoints or other environment-specific configurations required for the Next.js app.
