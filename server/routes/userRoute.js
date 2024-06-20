const express = require('express');
const router = express.Router();
const passport = require('passport'); 
require('../passport');

const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('API is working');
});

// Auth 
router.get('/auth/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] })); 

// Auth Callback 
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failure' }), (req, res) => {
    // On success, redirect to the success handler
    res.redirect('http://localhost:3000/success');
});

// User Info
router.get('/user', userController.getUserInfo);

// failure 
router.get('/failure', userController.failureGoogleLogin);

module.exports = router;
