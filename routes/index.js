'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send("reached modular  route!!");
    // res.render("index", locals);
    res.render('index', { title: "NEW TITLE", people: [ {name: "pink" } ] } );

});

router.get('/stylesheets/style.css', function(req, res, next){
    res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/'});
});

module.exports = router;