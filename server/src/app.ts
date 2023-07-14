import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import dbConnection from './config/db';
import {
  deleteUser,
  getAllUsers,
  postUser,
  editUser,
} from './controllers/user.controllers';

const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

dbConnection();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// API Endpoints
app.get('/api/users', getAllUsers);

app.post('/api/users', postUser);

app.delete('/api/users/:id', deleteUser);

app.put('/api/users/:id', editUser);
