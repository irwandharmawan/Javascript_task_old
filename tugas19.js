let string="Semangat...";
console.log(string.repeat(5));

let star="*****"
for(x=0;x<=4;x++){
  console.log(star.repeat(1+x*4))

  if(x==4){
    for(y=3;y>=0;y--){
      console.log(star.repeat(1+y*4))
    }
  }
}
