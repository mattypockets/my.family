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

// User login
// Post login route
// Req includes user obj with username and password
// Res includes user obj with id, username, and token
// Res only return if username and password match user in db

router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
    if(!user.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }
    if(!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passposrt.authenticate('local', { session: false }, (err, passportUser, info) => {
        if(err) {
            return next(err);
        }

        if (passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({ user: user.toAuthJSON() });
        }

        return status(400).info;
    })(req,res,next);
});

// Auth check for protected routes
// Req includes user obj with username, password, and token in header
// Res includes user obj with id, username, and token
// Res only returns if username and password match user in db and token is valid

router.get('/current', auth.required, (req, res, next) => {

    // Get id from req
    const { payload: { id } } = req;

    // Find user by id
    return Users.findById(id)
        .then((user) => {
            
            if(!user) {
                return res.sendStatus(400);
            }

            return res.json({ user: user.toAuthJSON() });
        });
});

module.exports = router;