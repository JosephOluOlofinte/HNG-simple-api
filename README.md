HNG PUBLIC API — HNG12 INTERNSHIP TASK

This is a simple public API developed as part of the HNG12 internship. The API returns the following details in JSON format:

- My registered HNG12 Slack email.
- The current date and time in ISO 8601 format (UTC)
- The GutHub repo URL for this project.

TECH STACK:
- Language: Typescript
- Framework: [NodeJS](https://hng.tech/hire/nodejs-developers), Express.js
- Deployment: Render
- CORS Handling: enabled


SETUP INSTRUCTIONS:
1. Clone the repository and navigate to its directory by running the following commands:

  - git clone github_url: "https://github.com/JosephOluOlofinte/HNG-simple-api"
  - cd HNG-simple-api

2. Run "npm install" to install dependencies
3. Run "npm run dev" run the server locally in dev mode
4. Crash the server and run "npm run build" to compile Typescript to Javascript
5. Run "npm start" to run the compiled files


API DOCUMENTATION
- Base URL: https://josepholuapi.onrender.com/
- Endpoint: GET/
- Request: 
     - Browser: visit https://josepholuapi.onrender.com/
     - Postman: make a GET request to [the base URL](https://josepholuapi.onrender.com/) 
     - CLI: curl -X GET https://josepholuapi.onrender.com/
- Response sample:

        {
            "email": "Josepholuolofinte@gmail.com",
            "current_datetime": "2025-01-30T09:30:00Z",
            "github_url": "https://github.com/JosephOluOlofinte/HNG-simple-api"
        }
