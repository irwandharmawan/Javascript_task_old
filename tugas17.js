let string="Saya beLajar bahaSa peMrograman deNgan khUsuk"

//toUpperCase
console.log(string.toUpperCase());
//toLowerCase
console.log(string.toLowerCase());

let string2="Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual"

//toUpperCase
console.log(string2.toUpperCase());
//toLowerCase
console.log(string2.toLowerCase());

//sentences
let sentences="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

var list=[];
for(x=0;x<6;x++){
  if(x==5){
      list.push(sentences.charCodeAt(x))
  }
  else{
    list.push(sentences.charCodeAt(x)+'-')
  }

}
console.log(list.join(""));
