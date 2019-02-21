const mongoose = require('mongoose');
const passposrt = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');


// User Signup
// Post new user route
// Req includes user obj with username and password
// Res includes user obj with id, username, and token

router.post('/', auth.optional, (req, res, next) => {
    const { body: { user } } = req;

    if(!user.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            }
        });
    }

    if(!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
        .then(() => res.json({ user: finalUser.toAuthJSON() }));
});