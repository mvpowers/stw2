const result = require('./routes/result');
const group = require('./routes/group');
const user = require('./routes/user');
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.set('secret', config.SECRET);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token',
  );
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH');
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
app.use('/group', group);
app.use('/user', user);

module.exports = {
  express: app,
  mongoose,
};
