const express = require('express');
const { 
    addQuestion, 
    readQuestion, 
    deleteQuestion 
    
} = require('../../controllers/controllers');

//create an router
const questionRoutes = express.Router()

questionRoutes.post('/add_question', addQuestion);
questionRoutes.get('/read_question', readQuestion);
questionRoutes.delete('/delete_question/:_id', deleteQuestion);

module.exports = questionRoutes;