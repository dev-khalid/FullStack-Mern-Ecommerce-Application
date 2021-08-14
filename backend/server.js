import express from 'express';
import products from './data/products.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database ');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const app = express();

app.use('/api/products', productRoutes);

//** @desc: Handling unhandled routes */
app.use(notFound);
app.use(errorHandler);
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
