const express = require('express');
const router = express.Router();
const passport = require('passport');


const usersConrtoller = require('../controllers/users_controller');
const postController = require('../controllers/post_controller');

router.get('/profile', usersConrtoller.profile);
router.get('/posts',postController.posts);
router.get('/sign-up',usersConrtoller.signUp);
router.get('/sign-in',usersConrtoller.signIn);

router.post('/create',usersConrtoller.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
) , usersConrtoller.createSession );

module.exports = router;