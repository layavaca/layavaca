console.log('Hello!');

var i = 0;
var elemento = document.getElementById('titulo1');
elemento.addEventListener('click', function () {
  // alert("click en titulo");
  //elemento.innerHTML = i;
  crearParrfo();
});

var elemento = document.getElementById('addlink');
elemento.addEventListener('click', function () {
  crearParrfo();
});
elemento.addEventListener('mouseover', function () {
  i = i + 1;
  console.log(i);
});

var lista = document.getElementsByTagName('a');
console.log('lista');

//var cabecera = document.getElementById("cabecera");
//var lista = document.getElementById("li");
//console.log(lista)

//var list = document.querySelectorAll("#menu li")
//console.log(list)

//var lista2 = document.querySelectorAll()


//)
//como crear un elemento desde js
//function crearParrfo(){

function addLink(){
  console.log("add link 1")
  var link = document.createElement("li")
  var ul =document.querySelector("aside ul")
  ul.appendChild(link)
}