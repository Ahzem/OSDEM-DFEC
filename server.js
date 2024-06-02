import express from 'express';
import reviewsRouter from './routes/reviews.route.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 3000;

// Understanding Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ConnectDB
connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// CRUD operations
app.use('/reviews', reviewsRouter);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });