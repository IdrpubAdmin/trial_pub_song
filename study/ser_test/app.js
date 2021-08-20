const express = require('express');
const ejs = require("ejs");
const app = express();
const port = 4000

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  console.log("안녕하세요")
  res.render("test_1", {});
})

app.listen(port, function(){
  console.log("실행중..")
})