const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to mongo: ", process.env.MONGO_URI)
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
})