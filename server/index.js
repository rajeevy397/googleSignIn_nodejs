require('dotenv').config();

const express = require('express'); 
const app = express(); 
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // React frontend URL
    credentials: true
}));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
}));

app.use(passport.initialize());
app.use(passport.session());

const userRoutes = require('./routes/userRoute');
app.use('/', userRoutes);

app.listen(5000 , () => { 
    console.log("Server Running on port 5000"); 
});
