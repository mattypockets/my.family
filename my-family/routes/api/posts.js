const router = require('express').Router();
const postController = require('../../controllers/postController');
const commentController = requrie('../../controllers/commentController');

router.route('/')
    .get(postController.findAll)
    .post(postController.create);

router.route('/users/:username')
    .get(postController.findByUsername);

router.route('/:postId')
    .get(postControler.findById)
    .put(postController.update)
    .delete(postController.remove);

router.route('/:postId/comments')
    .post(commentController.create);

module.exports = router;