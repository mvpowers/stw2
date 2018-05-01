const result = require('./routes/result');
const voteOption = require('./routes/voteOption');
const user = require('./routes/user');
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.set('secret', config.SECRET);
app.use((req, res, next) => {
  res.header('access-control-allow-origin', '*');
  res.header(
    'access-control-allow-headers',
    'origin, x-requested-with, content-type, accept, x-access-token',
  );
  next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(morgan('dev'));
app.use('/result', result);
app.use('/voteOption', voteOption);
app.use('/user', user);

module.exports = {
  express: app,
  mongoose,
};
