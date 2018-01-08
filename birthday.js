const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const path = require('path');
const http = require('https');


let app = express();
app.use(parser.urlencoded({
	extended: true
}));
app.use(parser.json());
app.use(express.static('public'));

app.get('/', (req,res,next)=>{
  return res.sendFile(path.join(__dirname,'public/views/landingPage.html'));
})
.post('/result',(req,res,next)=>{
  let htmlStr = '<!DOCTYPE html><html><head>'+
  '<style>body{background-image:url("images/cake.jpg"),url("images/cake.jpg");background-repeat:no-repeat,no-repeat;background-position:right top, left top; background-size: 200px 200px, 200px 200px; background-color:#0066cc}</style>'+
  '</head><body><p style = "text-align: center"><a href = "/">Go Back</a></p><div>';
  let name = req.body.name;
  let boolToday = req.body.today;
  console.log(name+':::'+boolToday)
  if(boolToday === 'yes'){
    htmlStr += '<h1 style = "text-align: center">Hey '+name+'!!!</h1><br/>';
    htmlStr += '<h2 style = "text-align: center">That calls for celebration!</h2><br/>';
    htmlStr += '<img src = "images/Birthday.gif" alt="Celebration" style="width:100%;height:100%"><br/></div>';
  }else{
    htmlStr += '<h3>Oh, I\'m sorry to hear that '+name+'</h3><br/>';
    htmlStr += '<p>Maybe we can celebrate another day</p><br/>';
  }
  htmlStr += '</body></html>';
  res.send(htmlStr);
})

module.exports = app;