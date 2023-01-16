
require("dotenv").config();
const express = require("express");
var path = require('path');
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const smsRoter = require('./routes/Sms')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/',indexRouter)
app.use('/', smsRoter);


    // app.use(cors());

    const PORT =  process.env.PORT || 8080
    
    //mongodb
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to Mongodb");
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    })
    
    
        
    app.listen(PORT, () => {
       
        console.log(`running port ${PORT}`)
    });
    