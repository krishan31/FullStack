const express = require('express');
const postController = require('../controllers/post');

const validator = require('../validator')
const router = express.Router()

router.get('/', postController.getPosts);
router.post('/post', validator.createPostValidator, postController.createPost);
router.delete('/:PostId',postController.deletePostt);

module.exports = router;

