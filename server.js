const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const apiRouter = require('./resources/api.router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRouter);

module.exports = app;