const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const apiRouter = require('./resources/api.router');

app.use('/api/', [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),

  apiRouter
]);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

module.exports = app;