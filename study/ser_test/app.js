const express = require('express');
const ejs = require("ejs");
const app = express();
const port = 4000

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.render("test_1", {});
})

app.listen(port, function(){
    console.log("실행중..")
})