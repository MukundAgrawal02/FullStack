import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a Mongoose schema and model for the "animals" collection
const animalSchema = new mongoose.Schema({}, { collection: 'animals' }); // Empty schema to match existing collection structure
const Animal = mongoose.model('Animal', animalSchema);

// API route to get all animals
app.get('/api/animals', async (req, res) => {
  try {
    const animals = await Animal.find({}); // Fetch all documents from the "animals" collection
    res.json(animals); // Send the fetched data as a JSON response
  } catch (error) {
    console.error('Error fetching animals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
