# slack-sdk-poc

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
