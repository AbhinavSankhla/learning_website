const mongoose = require('mongoose');
const stream = require('../Stream/Stream')
const subject = require('../Subject/Subject')
const topic = require('../Topic/Topic')

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
    trim: true,
  },

  options: [
    {
      optionText: { type: String, required: true }
    }
  ],

  correctAnswer: {
    type: Number,
    required: true,
    min: 0,
    max: 3 // Correct answer index (0 to 3 for 4 options)
  },

  stream: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stream' // Optional link to Stream model
  }],

  subject: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject' // Optional link to Stream model
  }],

  topic: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic' // Optional link to Stream model
  }],

  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'], // Question difficulty level
    required: true
  },

  explanation: [{
    type: String, // Optional explanation for the correct answer
    default: ''
  }],

  marks: {
    type: Number, // Optional explanation for the correct answer
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },


  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to ensure only 4 options are allowed
questionSchema.pre('save', function (next) {
  if (this.options.length !== 4) {
    throw new Error('Each question must have exactly 4 options.');
  }
  next();
});

// Export the Question model
const Question = mongoose.model('question', questionSchema);
module.exports = Question


//time limit
//marks