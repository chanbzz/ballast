const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Questions');
require('./services/passport');
const cors = require('cors')


mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;
db.on('connected', function() {
  console.log("db connected successfully");
})

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

const questionRouter = require('./routes/questions')


require('./routes/authRoutes')(app);
app.use('api/dashboard/questions', questionRouter)




const PORT = process.env.PORT || 9000;
app.listen(PORT);

module.exports = db;