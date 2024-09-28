const mongoose = require('mongoose');

// Define the schema for a Stream
const streamSchema = new mongoose.Schema({
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

  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the Stream model
const Stream = mongoose.model('stream', streamSchema);
module.exports = Stream;
