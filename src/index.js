import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import productsRoutes from './routes/products.routes';

// Config
const app = express();
app.use(express.json());
dotenv.config();
connectDB();


// Routes
app.use('/api/products', productsRoutes);


// Server
app.listen(3000, () => {
    console.log('Server listen on port 3000');
});