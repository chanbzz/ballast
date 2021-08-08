const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionsListSchema = new Schema({
    id: String,
    title: String,
    content: String,

});

const Que = mongoose.model('questions', questionsListSchema);

module.exports = Que;