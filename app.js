const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req,res)=>{
    res.send('We are on Home')
});



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true},
    ()=>console.log('Connected to DB'));

app.listen(3000);