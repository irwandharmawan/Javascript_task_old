const string= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."

function search(string){
  console.log(string.match('are'));
  console.log(string.match('words'));
}

search(string);
