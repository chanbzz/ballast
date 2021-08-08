const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Questions');
require('./services/passport');
const cors = require('cors')


mongoose.connect(keys.mongoURI);

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


require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 9000;
app.listen(PORT);
