//question controllers
const addQuestion = require('./questions/addQuestion')
const deleteQuestion = require('./questions/deleteQuestion')
const readQuestion = require('./questions/readQuestion')

//stream controllers
const addStream = require('./stream/addStream')
const deleteStream = require('./stream/deleteStream')
const readStream = require('./stream/readStream')

//subject controllers
const addSubject = require('./subject/addSubject')
const deleteSubject = require('./subject/deleteSubject')
const readsubject = require('./subject/readSubject')

//topic controllers
const addTopic = require('./topic/addTopic');
const deleteTopic = require('./topic/deleteTopic')
const readTopic = require('./topic/readTopic')

module.exports = {
    addQuestion,
    readQuestion,
    deleteQuestion,
    addStream,
    readStream,
    deleteStream,
    addSubject,
    readsubject,
    deleteSubject,
    addTopic,
    deleteTopic,
    readTopic
}