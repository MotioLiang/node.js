var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use("/assets",express.static(__dirname+"/assets"));

var todoController = require("./controller/todoController");

todoController(app);

app.listen(3000);