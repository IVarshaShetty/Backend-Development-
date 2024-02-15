
const isAuthenticated = (req, res, next) => {
    const isAuthenticated = true;
    if (isAuthenticated) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = {
    isAuthenticated
  };
  