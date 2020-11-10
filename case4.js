function deretAngka(n){
  let index=[]
  for (x=1;x<=n;x++){
    if (x%3===0 && x%5===0) {
      index.push('NIOMIC');
    }
    else if (x%3===0){
      index.push('NIO');
    }
    else if (x%5===0){
      index.push('MIC');
    }

    else{
      index.push(x);
    }
  }

  console.log(index.join(' '))
}

deretAngka(50);
