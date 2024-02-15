const Blog = require('../models/Blog');
exports.createBlog = (req, res) => {
  const { title, content, authorId } = req.body;
  if (!title || !content || !authorId) {
    return res.status(400).json({ message: 'Title, content, and author ID are required' });
  }
};
exports.getBlogByAuthorId = (req, res) => {
  const { authorId } = req.params;
  if (!Number.isInteger(parseInt(authorId))) {
    return res.status(400).json({ message: 'Author ID must be an integer' });
  }
};
