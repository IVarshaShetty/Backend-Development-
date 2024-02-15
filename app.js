const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
app.use(express.json());
app.use((req, res, next) => {
  next();
});
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
