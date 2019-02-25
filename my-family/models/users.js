const mongoose = require('mongoose');
const crypto = requrie('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const users = new Schema({
    username: String,
    hash: String,
    salt: String,
});

users.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf25sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

users.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf25Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

users.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        username: this.username,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
};

users.methods.toAuthJSON = function() {
    return {
        _id: this._id,
        username: this.username,
        token: this.generateJWT(),
    };
};

mongoose.model('users', users);