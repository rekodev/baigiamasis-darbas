import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './config/db';
import { getAllUsers } from './controllers/user.controllers';

const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

dbConnection();
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/api/users', getAllUsers);
