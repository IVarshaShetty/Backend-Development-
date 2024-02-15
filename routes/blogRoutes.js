const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.get('/:authorId', validateAuthorId, blogController.getBlogByAuthorId);

function validateAuthorId(req, res, next) {
  const { authorId } = req.params;
  if (!Number.isInteger(parseInt(authorId))) {
    return res.status(400).json({ message: 'Author ID must be an integer' });
  }
  next();
}

module.exports = router;
