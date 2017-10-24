var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [{item:"Dog"},{item:"East"},{item:"West"}];

module.exports = function(app){

     app.get("/todo",(req,res) => {
          res.render("todos",{todos:data});
     });

     app.post("/todo",urlencodedParser,(req,res) => {
     	data.push(req.body);
     	res.json(data);
     });

     app.delete("/todo/:name",(req,res) => {
         for (var i = 0; i < data.length; i++) {
         	 if (data[i].item == req.params.name) {
         	 	data.splice(i,1);
         	 }
         }
         res.json(data);
     });

    
    
}