function panggilNestedArray(value){
  let all_list=[]

  //define the nested loop
  value[0].forEach((item, i) => {
    all_list[i]=[item]
  });
  //put value into indexed nested array
  for(x=1;x<value.length;x++){
    value[x].forEach((item, i) => {
      all_list[i].push(item)
    });

  }
  console.log(all_list)
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)
