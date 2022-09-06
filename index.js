const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const  router = require('./source/chief');




app.use('/chief', router);
app.use('/costumer', require('./source/costumer'))



const port = process.env.PORT || 3001;
app.listen(port,()=>{
    mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB...');
})
.catch((err) => {
    console.error('Something went wrong connecting...', err);
});
    console.log(`Server is running on port ${port}`);
})

