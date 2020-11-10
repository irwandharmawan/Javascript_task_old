function panggilNestedArray(value){
  value.forEach((item, i) => {
    console.log('id :',value[i][0])
    console.log('name :',value[i][1])
    console.log('company :',value[i][2],'\n')    
  });

}

var nestedArray = [
  [1, "Mark Zuckerberg", "Facebook"],
  [2, "Elon Musk", "Tesla"],
  [3, "Bill Gates", "Microsoft"],
  [4, "Steve Jobs", "Apple"]
]

panggilNestedArray(nestedArray)
