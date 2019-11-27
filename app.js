const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const consolidate = require('consolidate');
const compression = require('compression');

require('dotenv').config();

const indexRoute = require('./src/routes/index');
const messageReceivedRoute = require('./src/routes/messageReceived');

const app = express();

app.engine('html', consolidate.swig);
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'html');

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));

app.use(indexRoute);
app.use(messageReceivedRoute);

module.exports = app;