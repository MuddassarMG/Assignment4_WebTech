// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET all comments
router.get('/', commentController.getAllComments);

// GET comment by ID
router.get('/:id', commentController.getCommentById);

// POST create new comment
router.post('/', commentController.createComment);

// PUT update comment by ID
router.put('/:id', commentController.updateComment);

// DELETE comment by ID
router.delete('/:id', commentController.deleteComment);

module.exports = router;
