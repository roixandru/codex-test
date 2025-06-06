# Prime Elite RPG Panel (Skeleton)

This repository contains a simplified starting point for a web panel for **Prime Elite RPG** servers.
It uses Node.js with Express, EJS templates and basic middleware for sessions, CSRF protection and rate limiting.

## Requirements
- Node.js 18+
- MySQL database (not configured by default)

## Setup
1. Copy `.env.example` to `.env` and update the values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```

## Features
- User registration and login with hashed passwords (in-memory for demo).
- Basic dashboard page after authentication.
- Admin area protected by session check.
- CSRF protection and rate limiting middleware.

This is only a skeleton to help further development. Feel free to expand modules in `routes/`, add database models and enhance the UI under `views/`.
