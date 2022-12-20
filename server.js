import express from 'express';
import morgan from 'morgan';
import { userRoutes } from './routes/userRoutes.js';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

const app = express();

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log('Db Connected!!');
  app.listen(5000, () => {
    console.log('Express server is listening at  http://127.0.0.1:5000 ');
  });
});

app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);
