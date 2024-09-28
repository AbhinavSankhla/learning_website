const express = require('express');
const { 
    addStream, 
    readStream, 
    deleteStream
    
    } = require('../../controllers/controllers');

//create an router
const streamRoutes = express.Router()

streamRoutes.post('/add_stream', addStream);
streamRoutes.get('/read_stream', readStream);
streamRoutes.delete('/delete_stream/:_id', deleteStream);

module.exports = streamRoutes;