import express from "express";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
// import { PORT, URI } from "./config.js";
import mongoose from 'mongoose';

import collegeRoute from './routes/collegeRoute.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/college', collegeRoute);

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log('App connected to database.');
        app.listen(process.env.PORT || 5555, () => {
            console.log(`App is listening to Port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });