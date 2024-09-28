const mongoose = require('mongoose');
const subject = require('../Subject/Subject');

// Define the schema for a Stream
const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true // Ensure stream names are unique
  },

  // description: {
  //   type: String,
  //   default: '' // Optional description for the stream
  // },

  subject: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject' // Optional link to Stream model
  }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the Stream model
const Topic = mongoose.model('topic', topicSchema);
module.exports = Topic;
