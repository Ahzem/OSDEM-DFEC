import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import process from 'process';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/reviews', async (req, res) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJbV3HCcc34ToRP0QS5s_EOTI&fields=reviews&key=${process.env.VITE_GOOGLE_MAPS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Google reviews' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
