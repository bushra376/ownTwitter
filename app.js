// Making Our Own Twitter

const express = require('express');
const app = new express();

app.listen('3000', (req, res, next) => console.log("server running!!"));

app.get('/', (req, res, next) => {
    res.send("welcome to My Web Page!!");
})