const mongoose = requre('mongoose');
const Schema = mongoose.Schema;


const posts = new Schema ({
    
    title: {
        type: String,
        trim: true,
        required: "You must create a title for your post."
    },

    body: String,

    image: {
        data: Buffer,
        type: String
    },

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    username: {
        type: String
    },

    timeStamp: {
        type: Date,
        default: Date.now
    }

});

let posts = mongoose.model("posts", posts);

module.exports = posts;