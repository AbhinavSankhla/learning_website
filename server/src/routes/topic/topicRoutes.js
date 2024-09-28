const express = require('express');
const { 
    addTopic, 
    deleteTopic, 
    readTopic

    } = require('../../controllers/controllers');

const topicRoutes = express.Router()

topicRoutes.post('/add_topic', addTopic)
topicRoutes.delete('/delete_topic', deleteTopic)
topicRoutes.get('/read_topic', readTopic)

module.exports = topicRoutes;