const mongoose = require('mongoose'),
  	  Schema = mongoose.Schema;

const ChatSchema = new Schema({
	message: {
        type: String,
        required: true
    },
	author: {
        type: String,
        required: true
    },
	when: {
        type: Date,
    }
});

module.exports = mongoose.model('Chat', ChatSchema);
