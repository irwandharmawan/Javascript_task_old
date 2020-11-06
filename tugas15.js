let AB=8;
let BC=6;

function sisiMiringSegitiga(x,y){
  let AC = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  return AC;
}
console.log('Nilai AB : ',AB);
console.log('Nilai BC : ',BC);
console.log('panjang sisi AC pada segitiga siku-siku tersebut adalah : ',sisiMiringSegitiga(AB,BC),' cm');
