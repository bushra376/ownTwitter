// Making Our Own Twitter

const express = require('express');
const morgan = require('morgan');

const app = new express();
app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log(req.method, req.path);
//     next();
// })

app.get('/', (req, res, next) => {
    res.send("welcome to My Web Page!!");
});

app.get('/news', (req, res, next) => {
    res.send("welcome to News Page!! HEADLINES");
});

app.listen('3000', (req, res, next) => console.log("server running!!"));