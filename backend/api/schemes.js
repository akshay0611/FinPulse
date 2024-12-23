import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB connection
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));
}

// Define Scheme schema and model
const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  exploreUrl: String,
  category: String,
});

const Scheme = mongoose.model('Scheme', schemeSchema);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://fin-pulse.vercel.app'); // Allow the frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      const schemes = await Scheme.find();
      res.status(200).json({ schemes });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching schemes' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
