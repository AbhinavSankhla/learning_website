const mongoose = require('mongoose');
const stream = require('../Stream/Stream');

// Define the schema for a Subject
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  // description: {
  //   type: String,
  //   default: ''
  // },

  streams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stream' // Optional link to Stream model
  }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the Subject model
// Subject = mongoose.model('Subject', subjectSchema);
// module.exports = Subject;

const Subject = mongoose.model('subject', subjectSchema);
module.exports = Subject;
