//Packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
//DB config
const db = require('./config/keys').mongoURI;
//Connect to DB
mongoose.connect(db)
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err));

//MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);
//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//Listen
app.listen(port, () => console.log(`Server running on port: ${port}`));