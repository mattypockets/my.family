const db = require('../models');

module.exports = {
    findAll: function(req,res) {
        db.posts
            .find(res.query)
            .populate('comment')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findbyUsername: function(req,res) {
        db.posts
            .find({'username': req.params.username})
            .sort({timestamp: -1})
            .populate('comment')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findById: function(req,res) {
        db.posts
            .findById(req.params.postId)
            .populate('comment')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req,res) {
        
    }
}