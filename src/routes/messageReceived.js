const express = require('express');
const messageReceivedRoute = express.Router();
const messageReceivedController = require('../controllers/messageReceivedController');

messageReceivedRoute.get('/message-received', messageReceivedController.index);

module.exports = messageReceivedRoute;