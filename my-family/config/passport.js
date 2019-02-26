const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const users = mongoose.model('users');

passport.use(new LocalStrategy ({
    usernameField: 'user[username]',
    passwordField: 'user[password]',
    }, 
    
    (username, password, done) => {
        users.findOne({username})
            .then((user) => {
                if(!user || !user.validatePassword(password)) {
                    return done(null, false, { errors: { 'username or password': 'is invalid' } });
                }
                return done(null, user);
            }) .catch(done);
}));