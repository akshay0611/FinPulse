import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB connection
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));
}

// Define Blog schema and model
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  link: { type: String, required: true },
  content: String,
});

const Blog = mongoose.model('Blog', blogSchema);

export default async function handler(req, res) {
  // Set CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', 'https://fin-test-sooty.vercel.app'); // Replace with frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const blogs = await Blog.find();
      res.status(200).json({ blogs });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blogs' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
