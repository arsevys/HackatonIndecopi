

class GMarker {
 
 static pintar(location,mapa,nom,ruc){
 	let color=["./img/verde.png","./img/amarillo.png","./img/rojo.png"]
 	let data=datos[ruc];
 	console.log(data);
 	let c=color[0];
 	
 	if(datos[ruc]){
     c=color[data.color];
 	}
 	
 	 var nuevoMarker=new google.maps.Marker({
              map: mapa,
              position: location,
              title:nom,
              animation: google.maps.Animation.DROP,
              icon:c
            });
 	nuevoMarker.addListener('click', function () {
        if (this.getAnimation() !== null) {
          this.setAnimation(null);
        } else {
          this.setAnimation(google.maps.Animation.BOUNCE);
          //alert("Obteniendo Datos")
        }

        consultad(datos[""+ruc]);
      });
 }

} 

