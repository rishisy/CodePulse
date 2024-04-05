import express from "express";

import dotenv from 'dotenv';

dotenv.config() ; 

const port = process.env.PORT || 4080;

const app = express();

app.get('/' , (req,res) => res.send('Server is Ready now'));

app.listen(port , () => console.log(`Server started on port ${port}`));

