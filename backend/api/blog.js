import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB connection (ensuring that connection is made only once)
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));
}

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
