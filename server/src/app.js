const express = require('express');
require('./database/config');

const questionRoutes = require('./routes/questions/questionRoutes');
const streamRoutes = require('./routes/stream/streamRoutes');
const subjectRoutes = require('./routes/subject/subjectRoutes');
const topicRoutes = require('./routes/topic/topicRoutes');

const allRoutes = express.Router();


allRoutes.use('/questions', questionRoutes);
allRoutes.use('/stream', streamRoutes);
allRoutes.use('/subject', subjectRoutes);
allRoutes.use('/topic', topicRoutes);

module.exports = allRoutes;