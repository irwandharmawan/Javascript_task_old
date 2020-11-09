let kata="Saya ingin belajar bersama";
kata=kata.split(" ");

kata.forEach(function(item,index,array){
  console.log('Item : ',item,' Index ke ',index);
});
