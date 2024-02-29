import express from "express";

import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import {notFound , errorHandler } from './middleware/errorMiddleware.js';

import connectDB from './config/db.js';

dotenv.config() ; 

const port = process.env.PORT || 4080;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/users' , userRoutes);
app.get('/' , (req,res) => res.send('Server is Ready now'));


app.use(notFound);
app.use(errorHandler);

app.listen(port , () => console.log(`Server started on port ${port}`));

