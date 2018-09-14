// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
const taskSchema = new mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	name: String,
	category: Number,
	complete: Boolean

});

// TODO: Use schema to create model

// TODO: Export Museum Model
module.exports = mongoose.model('Task', taskSchema);