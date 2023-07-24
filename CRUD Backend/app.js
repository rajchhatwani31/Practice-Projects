const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(cors());
require('./Routes/routes')(app);

mongoose.connect('mongodb://127.0.0.1:27017/Project1', {useNewUrlParser : true});

mongoose.connection
    .once("open", () => { 
       app.listen(port,()=>{
        console.log("Here we are, connected")
       })
    })
    .on("error", (error) => {
        console.log('OOPs There is something wrong', error);
    });