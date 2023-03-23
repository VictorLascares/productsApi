import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import { createRoles } from './libs/initialSetup';
import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';

// Config
const app = express();
app.use(express.json());
dotenv.config();
connectDB();
createRoles();


// Routes
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);


// Server
app.listen(3000, () => {
    console.log('Server listen on port 3000');
});