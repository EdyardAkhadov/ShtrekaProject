import express from 'express';
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import {registerValidation} from './server/validations/authValid.js';
import { validationResult } from 'express-validator';
import UserModel from './server/models/User.js';

mongoose
    .connect('mongodb+srv://akhadoveduard:MoyParo1@shtrekadb.ugnhe5j.mongodb.net/?retryWrites=true&w=majority&appName=ShtrekaDB',)
    .then(() => console.log("DB is starting!"))
    .catch((err) => console.log('DB error!', err));

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation,  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }

    const doc = new UserModel({
        email: re
    })

    res.json({
        success: true,
    })
});

app.listen(4444, (err)=>{
    if(err){
        return console.log(err);
    }

    console.log('Server is starting!')
});