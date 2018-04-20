// Making Our Own Twitter

const express = require('express');
const morgan = require('morgan');
const nunjucks = require("nunjucks");
const routes = require('./routes');

const app = new express();


app.use(morgan('dev'));
//All requests after passing through morgan, should go to the middleware router below
// For any incoming requests, plug the requests to our standalone Router
app.use(routes);

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

// app.use((req, res, next) => {
//     console.log(req.method, req.path);
//     next();
// })

// app.get('/', (req, res, next) => {
//     // res.send("welcome to My Web Page!!");
//     res.render("index", locals);
// });

// app.get('/news', (req, res, next) => {
//     res.send("welcome to News Page!! HEADLINES");
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

app.listen('3000', (req, res, next) => console.log("server running!!"));