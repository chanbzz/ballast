const mongoose = require('mongoose');
const express = require('express');
const db = require('../index');
const Questions = require('../models/Questions');

const router = express.Router()

console.log("in questions :)())))))")
// router.route('/dashboard/questions').get((req, res) => {
//     console.log("in questions.js");
//     db.collection('questions').find().toArray()
//         .then(docs => questions = console.log(docs))
        
//         .catch(err => res.status(400).json('Error: ' + err))
// });

router.get('/api/dashboard/questions', async (req, res) => {
    console.log("hi")
    console.log("req")
})
module.exports = router;
    















// let question;

// mongoose.connect(keys.mongoURI, {useNewUrlParser: true}, function (err) {
//     if (err) throw err;
//     console.log('Successfully connected');

    
//     db.collection("questions").find().toArray().then(docs => question = (docs))

    

// });

// console.log(question)










// router.route("/api/dashboard/questions").get((req, res) => {
//     Que.find()
//         .then(foundQues => res.json(foundQues))
// })




// module.exports = app => {
//     app.get(
//         '/api/dashboard/questions', (res, req) => {

            


//     });
// };


