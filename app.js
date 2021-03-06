var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var path=require("path");
var sun=require("./controller/Sunat");
var Operaciones=require("./controller/Operaciones")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',__dirname+"/public");

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,res){
	res.render("index.html");
})
app.get("/mapa",function(req,res){
	res.render("indexp.html");
})
app.post("/consulta",Operaciones.consultaTodoRuc);

app.listen(3000,()=>{
	console.log("El servidor se esta ejecutando en el puerto 3000")
})