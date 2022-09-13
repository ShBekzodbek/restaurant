const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const chiefRouter = require('./source/chief');

const customerRouter = require('./source/costumer');


app.use('/chief', chiefRouter);
app.use('/costumer', customerRouter);

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message, data})
})

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

