function regex(){
  let data='Belajar menimba ilmu programming bersama Niomic'
  let char=new RegExp('bersama')

  console.log(char.exec(data))
}

regex()
