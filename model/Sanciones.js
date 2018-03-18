var pg=require('pg');
var config=require("./../configBD.json");
var pool=new pg.Pool(config);

class Sanciones {
static cargarSunatRucTodo(callback){
 pool.connect(function(err,client,done){
         
      client.query(`select prorz,dniRuc,direc,lat,lng from sanciones
where  COALESCE(lat, '') <> ''
group by prorz,dniRuc,direc,lat,lng`,[],(err,data)=>{
       if(err){console.log(err);return;}
       done();
       return callback(null,data.rows);
      });
});

}
 
static actualisarTodo(a,b,c){
 pool.connect(function(err,client,done){
        
      client.query("update sanciones set lat=$1 ,lng=$2 where dniruc=$3",[a,b,c],(err,data)=>{
       if(err){console.log(err);return;}
       done();
       
      });
});

}

}

module.exports=Sanciones;