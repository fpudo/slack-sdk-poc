# slack-sdk-poc

You will need to have nodejs and npm installed in your enviroment.

After cloning this repo, npm install the packages inside the PoC folder. Then run node app.js in your terminal.

You will need to update the .env file with your credentials.

# API

- Get List of users <br />
METHOD: GET <br />
ROUTE: /users <br />

- Send User a DM <br />
METHOD: POST <br />
ROUTE: /users/:id/send-message <br />
BODY: { <br />
  "message": String <br />
} <br />
