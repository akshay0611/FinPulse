import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Define Blog schema and model
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  link: { type: String, required: true },
  content: String,  // Add the content field to the schema  
});

const Blog = mongoose.model('Blog', blogSchema);

// API endpoint to get all blog posts
app.get('/api/blog', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ blogs });  // Send blogs as a JSON object
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

// API endpoint to get a specific blog post by its ID
app.get('/api/blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);  // Find blog by ID
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ blog });  // Send the specific blog post
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the blog' });
  }
});

// Define Scheme schema and model
const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  exploreUrl: String,
  category: String,
});

const Scheme = mongoose.model('Scheme', schemeSchema);

// Endpoint to get all schemes
app.get('/api/schemes', async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json({ schemes });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schemes' });
  }
});

// Server setup
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
