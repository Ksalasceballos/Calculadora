function init(){
  //variable
  var resultado = document.getElementById("resultado");
  var Reset = document.getElementById("Reset");
  var Suma = document.getElementById("Suma");
  var Resta = document.getElementById("Resta");
  var Multiplicar = document.getElementById("Multiplicar");
  var Dividiendo = document.getElementById("Dividiendo");
  var Borrar = document.getElementById("Borrar");
  var Igual = document.getElementById("Igual");
  var Uno = document.getElementById("Uno");
  var Dos= document.getElementById("Dos");
  var Tres = document.getElementById("Tres");
  var Cuatro = document.getElementById("Cuatro");
  var Cinco = document.getElementById("Cinco");
  var Seis = document.getElementById("Seis");
  var Siete = document.getElementById("Siete");
  var Ocho = document.getElementById("Ocho");
  var Nueve = document.getElementById("Nueve");
  var Cero = document.getElementById("Cero");

  //Eventos
  uno.onclick = function(e){
      resultado.textContent = resultado.textContent + "1";
  }
  Dos.onclick = function(e){
      resultado.textContent = resultado.textContent + "2";
  }
  Tres.onclick = function(e){
      resultado.textContent = resultado.textContent + "3";
  }
  Cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent + "4";
  }
  Cinco.onclick = function(e){
      resultado.textContent = resultado.textContent + "5";
  }
  Seis.onclick = function(e){
      resultado.textContent = resultado.textContent + "6";
  }
  Siete.onclick = function(e){
      resultado.textContent = resultado.textContent + "7";
  }
  Ocho.onclick = function(e){
      resultado.textContent = resultado.textContent + "8";
  }
  Nueve.onclick = function(e){
      resultado.textContent = resultado.textContent + "9";
  }
  Cero.onclick = function(e){
      resultado.textContent = resultado.textContent + "0";
  }

  Reset.onclick = function(e){
      resetear();
  }

  



}