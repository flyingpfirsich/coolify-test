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

## Deploying with Coolify (Dockerfile Build Pack)

1. **Commit & push** the current repository (including the new `Dockerfile` and `.dockerignore`) to GitHub/GitLab.
2. **Create a new resource** inside your Coolify project and pick the deployment option that matches your repo visibility (Public / GitHub App / Deploy Key).  
3. **Select the repository & branch**, then switch the build pack from the default Nixpacks to **Dockerfile**. Coolify will use the Dockerfile at the repo root as described in the official docs.[^coolify-dockerfile]
4. **Configure build settings**  
   - Base directory: `/` (unless you move the Dockerfile into a subfolder).  
   - Environment variables: add `PORT=3000` only if you need to override the default in `server.js`.  
5. **Configure network**  
   - Set the exposed port to `3000` so it matches the `EXPOSE 3000` instruction and the server’s default port.  
   - Assign your domain and SSL options if needed.  
6. **Deploy**. Coolify will build the image using your Dockerfile, run `npm install --omit=dev`, copy in the app, and start it with `node server.js`.  
7. (Optional) Add pre/post deployment hooks or additional environment variables in Coolify’s UI if your workflow requires them.

[^coolify-dockerfile]: Coolify Dockerfile build pack guide — https://coolify.io/docs/applications/build-packs/dockerfile

