
function sumar() {
     let nro1 = Number(prompt("ingrese el primer numero:"));
     let nro2 = Number(prompt("ingrese el segundo numero:"));
     let resultado = nro1 + nro2;

     document.getElementById("resultado").value += "el resultado de tu suma es: "+ resultado +"\n";

}
function restar(){
     let nro1 = Number(prompt("ingrese el primer numero:"));
     let nro2 = Number(prompt("ingrese el segundo numero:"));
     let resultado = nro1 - nro2;

     document.getElementById("resultado").value += "el resultado de tu resta es: "+ resultado +"\n";
}
function dividir(){
     let nro1 = Number(prompt("ingrese el primer numero:"));
     let nro2 = Number(prompt("ingrese el segundo numero:"));
     let resultado = nro1 / nro2;

     document.getElementById("resultado").value += "el resultado de tu division es: "+ resultado +"\n";
}
function multiplicar(){
     let nro1 = Number(prompt("ingrese el primer numero:"));
     let nro2 = Number(prompt("ingrese el segundo numero:"));
     let resultado = nro1 * nro2;

     document.getElementById("resultado").value += "el resultado de tu multiplicacion es: "+ resultado +"\n";
}

function potencia(){
     let nro1 = Number(prompt("ingrese el primer numero:"));
     let nro2 = Number(prompt("ingrese el segundo numero:"));
     let resultado = nro1 ** nro2;

     document.getElementById("resultado").value += "el resultado de tu potencia es: "+ resultado +"\n";
}

function cuadrado(){
     let nro1 = Number(prompt("ingrese el numero:"));
     let resultado = nro1 ** 2;

     document.getElementById("resultado").value += "el resultado de tu cuadrado es: "+ resultado +"\n";
}
//factorial = 5 = 1*2*3*4*5
function factorial(){
     let nro1 = Number(prompt("ingrese el numero:"));
     let $i = 1;
     resultado = 1;
     while($i<=nro1){
          resultado = resultado * $i;
          $i++;
     }
     

     document.getElementById("resultado").value += "el resultado de tu cuadrado es: "+ resultado +"\n";
}


document.getElementById("suma").addEventListener("click", sumar);
document.getElementById("resta").addEventListener("click", restar);
document.getElementById("division").addEventListener("click", dividir);
document.getElementById("multiplicacion").addEventListener("click", multiplicar);
document.getElementById("potencia").addEventListener("click", potencia);
document.getElementById("cuadrado").addEventListener("click", cuadrado);
document.getElementById("factorial").addEventListener("click", factorial);


//------------------------------------------------------------------------------------------//
/// ejercicio 8


function blanco(){
    document.getElementById("lista").style.background = "white";
}
function negro(){
    document.getElementById("lista").style.background = "black";
}
function azul(){
    document.getElementById("lista").style.background = "blue";
}
function rojo(){
    document.getElementById("lista").style.background = "red";
}
function amarillo(){
    document.getElementById("lista").style.background = "yellow";
}
function normal(){
     document.getElementById("lista").style.background = "purple";
}



 document.getElementById("blanco").addEventListener("mouseenter", blanco)
  document.getElementById("blanco").addEventListener("mouseout", normal)

  document.getElementById("negro").addEventListener("mouseenter", negro)
  document.getElementById("negro").addEventListener("mouseout", normal)

  document.getElementById("azul").addEventListener("mouseenter", azul)
  document.getElementById("azul").addEventListener("mouseout", normal)

  document.getElementById("rojo").addEventListener("mouseenter", rojo)
  document.getElementById("rojo").addEventListener("mouseout", normal)

  document.getElementById("amarillo").addEventListener("mouseenter", amarillo)
  document.getElementById("amarillo").addEventListener("mouseout", normal)


  //_______________________________________________________________________________________//
  //8b

  document.querySelectorAll(".toggle").forEach((boton, i) => {
  boton.addEventListener("click", function () {
    const provincia = boton.previousElementSibling;
    const listaCiudades = boton.nextElementSibling;

    if (listaCiudades.style.display === "none") {
      listaCiudades.style.display = "block";
      provincia.classList.remove("subrayado");
    } else {
      listaCiudades.style.display = "none";
      provincia.classList.add("subrayado");
    }
  });
});

document.querySelectorAll(".provincia").forEach((provincia) => {
  provincia.addEventListener("click", function () {
    if (provincia.classList.contains("subrayado")) {
      const listaCiudades = provincia.nextElementSibling.nextElementSibling;
      listaCiudades.style.display = "block";
      provincia.classList.remove("subrayado");
    }
  });
});