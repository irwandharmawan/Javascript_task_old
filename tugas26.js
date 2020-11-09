const array=[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

array.forEach((item, index,array) => {
  if (isFinite(item)){
    console.log('Angka ',item,' NOT Infinity');
  }
  else {
    console.log('Angka ',item,' Infinity');
  }
});
