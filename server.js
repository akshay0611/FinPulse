import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());  // This should come before your routes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Define blog schema and model
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  link: { type: String, required: true }  // Added link property to store the URL for each blog post
});

const Blog = mongoose.model('Blog', blogSchema);

// API endpoint to get blog posts
app.get('/api/blog', async (req, res) => {
  try {
    const blogs = await Blog.find();
    console.log(blogs); // Log blog data here
    res.json({ blogs });  // Send blogs in the expected format
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

// Server setup
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
