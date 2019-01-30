# slack-sdk-poc

# API

- Get List of users
METHOD: GET 
ROUTE: /users

- Send User a DM
METHOD: POST 
ROUTE: /users/:id/send-message
BODY: {
  "message": String
}
