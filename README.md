# Minimal Web Server

A minimal webserver with a Node.js backend and a frontend interface.

## Features

- Express.js backend server
- Modern frontend with HTML, CSS, and JavaScript
- RESTful API endpoints
- Responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## API Endpoints

- `GET /api/hello` - Returns a greeting message
- `POST /api/data` - Accepts JSON data with a `name` field and returns a personalized response

## Project Structure

```
coolify-test/
├── server.js          # Node.js/Express backend server
├── package.json       # Node.js dependencies and scripts
├── public/            # Frontend files
│   ├── index.html     # Main HTML page
│   ├── styles.css     # Styling
│   └── script.js      # Frontend JavaScript
└── README.md          # This file
```

