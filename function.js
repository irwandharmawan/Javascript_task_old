var x=document.getElementById('location');

function getLocation(){
  if(navigator.geolocation){
  //navigator.geolocatopn.getCurrent  
  navigator.geolocation.getCurrentPosition(tunjukanPosisi);
}

  else{
    x.innerHTML='Geolocation tidak mensupport browser anda';
  }

}
function tunjukanPosisi(position){
  // x.innerHTML='Latitude : '+ position.coords.latitude +"<br>Longitude : " + position.coords.longitude;
  x.innerHTML='cieeeee berhasil nih yeeeeeeeee'
}
