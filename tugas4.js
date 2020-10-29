//make 3 variables
const jack=170;
const daniel=180;
const rack=159;

const max_value=(a,b,c)=>{
  if(a>b && a>b){
    console.log(a)
    if(b>c){
      console.log(a,b,c);
    }else{
      console.log(a,c,b);
    }
  }else if(b>a && b>c){
    console.log(b)
    if(a>c){
      console.log(b,a,c);
    }else{
      console.log(b,c,a);
    }
  }else if(c>a && c>b){
    console.log(c)
    if(a>b){
      console.log(c,a,b);
    }else{
      console.log(c,b,a);
    }
  }
}
max_value(daniel,jack,rack);
