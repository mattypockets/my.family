const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let comments = new Schema({

    body: {
        type: String,
        trim: true,
        required: true
    },

    user_id: {
        type: Schema.Types.ObjectId,
        ref:'users'
    },

    username: String,

    timeStamp: {
        type: Date,
        default: Date.now,
    },

    post_id: {
        type: Schema.types.ObjectId,
        ref: 'posts'
    }
});

let comments = mongoose.model("comments", comments);

module.exports = comments;