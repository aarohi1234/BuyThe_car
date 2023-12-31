require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const connection = require('./config/db');
const userRoute = require('./routes/user.routes');
const carRoute = require('./routes/cars.routes');
const OemRouter = require('./routes/oem.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/user',userRoute)
app.use('/car',carRoute)
app.use('/oem',OemRouter)


app.get('/', async(req , res)=>{
    res.send('Welcome to Server')
})


app.listen(8080 , async()=>{
    try {
        await connection();
        console.log(`App listening on ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})