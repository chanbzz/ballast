const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionsListSchema = new Schema({
    id: String,
    title: String,
    content: String,

});

const Questions = mongoose.model('Questions', questionsListSchema);

module.exports = Questions;
