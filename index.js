import express from "express";
import cors from 'cors';
import { PORT, URI } from "./config.js";
import mongoose from 'mongoose';

import collegeRoute from './routes/collegeRoute.js'

const app = express();
app.use(express.json());

// Middleware for handling cors origin
// Method 1: allow all origins with default of cors(*)
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome Buddy!');
});

app.use('/college', collegeRoute);

mongoose
    .connect(process.env.URI || URI)
    .then(() => {
        console.log('App connected to database.');
        app.listen(process.env.PORT || 5555, () => {
            console.log(`App is listening to Port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });