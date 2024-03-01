import express from "express";
import cookieParser from "cookie-parser";
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
app.use(cookieParser());
app.use(errorHandler);
app.use('/api/users' , userRoutes);
app.get('/' , (req,res) => res.send('Server is Ready now'));

// we keep this in last so if no url matches it will show no found
app.use(notFound);


app.listen(port , () => console.log(`Server started on port ${port}`));

