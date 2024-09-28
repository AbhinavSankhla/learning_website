const express = require('express');
const { 
    addSubject, 
    readsubject, 
    deleteSubject
    } 
    = require('../../controllers/controllers');

const subjectRoutes = express.Router()

subjectRoutes.post('/add_subject', addSubject);
subjectRoutes.get('/read_subject', readsubject);
subjectRoutes.delete('/delete_subject/:_id', deleteSubject);

module.exports = subjectRoutes;