const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const path = require('path');
const http = require('https');


let app = express();
app.set('view engine', 'pug');
app.use(parser.urlencoded({
	extended: true
}));
app.use(parser.json());
app.use(express.static('public'));

app.get('/', (req,res,next)=>{
  res.render('landingPage');
})
.post('/result',(req,res,next)=>{
  let name = req.body.name;
  let boolToday = req.body.today === 'yes'? true:  false;
  console.log(name+':::'+boolToday)
  res.render('celebrate',{name, boolToday});
})

module.exports = app;