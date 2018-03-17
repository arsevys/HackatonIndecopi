

class GMarker {
 
 static pintar(location,mapa){
 	 var nuevoMarker=new google.maps.Marker({
              map: mapa,
              position: location,
              title:"Demo",
              animation: google.maps.Animation.DROP,
              icon:"./img/in1.png"
            });
 	nuevoMarker.addListener('click', function () {
        if (this.getAnimation() !== null) {
          this.setAnimation(null);
        } else {
          this.setAnimation(google.maps.Animation.BOUNCE);
          //alert("Obteniendo Datos")
        }
      });
 }

} 

