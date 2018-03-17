var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var path=require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',__dirname+"/public");

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,res){
	res.render("index.html");
})

app.listen(3000,()=>{
	console.log("El servidor se esta ejecutando en el puerto 3000")
})