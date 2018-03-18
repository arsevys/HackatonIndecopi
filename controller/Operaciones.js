
var Sanciones=require("./../Model/Sanciones");
var consulta=require("./Sunat")
class Operaciones {

static consultaTodoRuc(req,res){
console.log(Sanciones)
var oi=[
			
			{ "ruc": 20100047218,

			  "direccion": 'CENTENARIO NRO. 156 URB. LAS LADERAS DE MELGAREJO LIMA - LIMA - LA MOLINA',
			 "long": "-12.068903",
			 "lat": "-76.936453"
			  
			},
			{ "ruc": 20258886420,
			 
			  "direccion": 'AV. EL SOL AGROPEC.VILLA RICA LIMA - LIMA - VILLA EL SALVADOR',
			  "long": "-12.215088",
			 "lat": "-76.962115"
			 
			 },
			{ "ruc": 20100053455,
			  
			 "direccion": 'AV. CARLOS VILLARAN NRO. 140  LIMA - LIMA - LA VICTORIA',
			 "long": "-12.089549",
			 "lat": "-77.022619"
			 },

			{ "ruc": 20514226432,
			  
			  "direccion": 'MQUEZ DE BULA LIMA - LIMA - CHORRILLOS',
			  "long": "-12.203411",
			 "lat": "-77.005136"
			  },
			{ "ruc": 20100041953,
			  
			 "direccion": 'AV. PASEO DE LA REPUBLICA  3505  LIMA - SAN ISIDRO',
			 "long": "-12.09965",
			 "lat": "-77.025921"
			  
			  },
			{ "ruc": 20100055237,
			  
			 "direccion": 'AV. ARGENTINA  4793  - CARMEN DE LA LEGUA REYNOSO',
			 "long": "-12.048228",
			 "lat": "-77.096776"
			 },

			{ "ruc": 20501426041,
			  
			  "direccion": 'AV. PASEO DE LA REPUBLICA  3755 LIMA - SAN ISIDRO',
			  "long": "-12.101568",
			  "lat": "-77.026581"
			  
			  
			  },
			{ "ruc": 20130098488,
			 
			  "direccion": 'FRANCISCO LAZO 297  TACNA - TACNA',
			  "long": "-18.013228",
			  "lat": "-70.253132"
			   },
			   
			{ "ruc": 20220013708,
			 

			  "direccion": 'AV. JAVIER PRADO OESTE  757  LIMA - MAGDALENA DEL MAR',
              "long": "-12.09284",
			  "lat": "-77.061366"
			   },


			{ "ruc": 20544466675,

			  "direccion": 'AV. DEFENSORES DEL MORRO  1661    LIMA - CHORRILLOS',
			  "long": "-12.177256", 
			  "lat": "-77.015694"
			 },

			{ "ruc": 20498280553,

			  "direccion": 'MARISCAL RAMON CASTILLA  758   LIMA - MAGDALENA DEL MAR',
			  "long": "-12.084265",
			  "lat":  "-77.079444"
			  },
			{ "ruc": 20479649970,
			 
			  "direccion": 'SAN JOSE NRO. 285  - CHICLAYO - CHICLAYO',
			  "long": "-6.770352",
			  "lat": "-79.843373"
			  
			  },
			{ "ruc": 20544466675,

			  "direccion": 'AV. DEFENSORES DEL MORRO 1661   LIMA - CHORRILLOS',
			  "long":  "-12.177256",
			  "lat": "-77.015694"
			  
			  },
			{ "ruc": 20454522983,
			  
			  "direccion": 'AV. GOYENECHE  305  AREQUIPA ',
			  "long": "-16.400596",
			  "lat": "-71.527308"
			 
			 },
			{ "ruc": 20306841506,
			  
			  "direccion": 'AV. JAVIER PRADO ESTE  4200 - LIMA - SANTIAGO DE SURCO',
			  "long": "-12.085282",
			  "lat":  "-76.977332"
			  },
			  
			  
			{ "ruc": 20514446980,
			  
			  "direccion": 'JR. GARCIA Y GRACIA  747  LIMA - BARRANCO',
			  "long": "-12.140321",
			  "lat": "-77.014833"
			 },
			{ "ruc": 20207338029,

			  "direccion": 'PZA.BOLOGNESI  CERCADO HUANCAVELICA',
			  "long": "-12.060307",
			  "lat":  "-77.041514"

           			 },
			{ "ruc": 20100269466,
			  
			  "direccion": 'AV. NICOLAS DE PIEROLA  1785 - LIMA ',
			  "long": "-12.058043",
			  "lat": "-77.024451"
			   },
			{ "ruc": 20492204057,
			  
			  "direccion": 'AV. COLONIAL NRO. 398 LIMA - LIMA - LIMA',
			  "long": "-12.048856",
			  "lat": "-77.068547"
			  
			   },
			{ "ruc": 20108568098,
			  
			  "direccion": 'GERVASIO SANTILLANA  260 LIMA - LIMA - MIRAFLORES',
			  "long": "-12.104325",
			  "lat": "-77.029661"
			  },
			{ "ruc": 20522291201,
			  
			  "direccion": 'AV. AVIACION  2405  LIMA - LIMA - SAN BORJA',
			  "long": "-12.088629",
			  "lat":  "-77.00327"
			  },
			{ "ruc": 20306841506,
			  
			  "direccion": 'AV. JAVIER PRADO ESTE  4200 - LIMA ',
			  "long": "-12.085282",
			  "lat": "-76.977332"
			 },
			{ "ruc": 20100072247,
			 
			  "direccion": 'AV. ARICA  751 LIMA  - BREÑA',
			  "long": "-12.058139",
			  "lat": "-77.048924"
			 },
			{ "ruc": 20100053455,
			 
			  "direccion": 'AV. CARLOS VILLARAN  140   LIMA - LA VICTORIA',
			  "long": "-12.089503",
			  "lat": "-77.022767"
			 },
			{ "ruc": 20517224422,
			  
			  "direccion": 'BOLIVAR NRO. 332    LIMA - MIRAFLORES',
			  "long": "-12.125999",
			  "lat": "-77.026601"
			  
			   },
			{ "ruc": 20475522657,
			 
			  "direccion": 'LAS COLINAS NRO. 110  LIMA - SANTIAGO DE SURCO',
			  "long": "-12.113953",
			  "lat": "-76.968647"
			},
			{ "ruc": 20510896344,
			  
			  "direccion": 'AV. CANAVAL Y MOREYRA NRO. 480  LIMA  - SAN ISIDRO',
			  "long": "-12.097698",
			  "lat": "-77.020839"
			  
			    }
  ];


  for(let i=0;oi.length>i;i++){
   console.log(oi[i].ruc,oi[i].direccion)
	Sanciones.actualisarTodo(oi[i].long,oi[i].lat,oi[i].ruc)
}
Sanciones.cargarSunatRucTodo((err,data)=>{

console.log(err,data)
// for(let i=0;data.length>i;i++){

	// 	// consulta.consulta(data[i].dniruc,(x)=>{
	// 	// 	console.log(x);
	//  //     oi.push({"ruc":data[i].dniruc,"dir":x.direccion})
	// 	// })




		


	// }

res.send(data);
})


}

}

module.exports=Operaciones;