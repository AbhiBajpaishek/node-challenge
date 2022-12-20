import express from 'express';
import { register, verify } from '../controller/registerController.js';
import { userByEmail } from '../controller/userController.js';

export const userRoutes = express.Router();

userRoutes.post('/register', register);

userRoutes.post('/verify', verify);

userRoutes.post('/user', userByEmail);
