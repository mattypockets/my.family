const db = require('../models');

module.exports = {

    findById: function(req,res) {
        db.comments
            .find(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req,res) {
        db.comments
            .create({
                body: req.body.comments,
                username: req.body.username,
                post_id: req.params.postId
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findPostById: function(req,res) {
        db.comments
            .find({'post_id': req.params.postId})
            .sort({timestamp: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req,res) {
        db.comments
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};