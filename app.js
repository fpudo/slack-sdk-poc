const env = require('node-env-file');
env(__dirname + '/.env');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const bodyParser = require('body-parser');

const routesApi = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routesApi);
app.listen(port, () => console.log(`Slack SDK POC is listening on port ${port}!`))

module.exports = app;
