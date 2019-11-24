const express = require('express');
const messageReceivedRoute = express.Router();
const messageReceivedController = require('../controllers/MessageReceivedController');

messageReceivedRoute.post('/message-sended', messageReceivedController.index);
messageReceivedRoute.get('/message-received', messageReceivedController.sucess);

module.exports = messageReceivedRoute;