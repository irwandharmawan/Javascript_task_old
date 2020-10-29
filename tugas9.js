function hewan(){
  var kucing={
    tipe:'angora',
    warna:'putih susu',
    harga:500000,
    asal:'hungary'
  }
  var anjing={
    tipe:'husky',
    warna:'putih hitam',
    harga:1500000,
    asal:'hungary'
  }
  console.log(typeof(kucing))
  for(let x in anjing){
    console.log(anjing[x]);
  }
}

hewan();
