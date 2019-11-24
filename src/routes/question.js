const express = require('express');
const questionRoute = express.Router();
const questionController = require('../controllers/QuestionController');

questionRoute.post('/question', questionController.index);

module.exports = questionRoute;