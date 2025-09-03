
//*let Parrafo = document.querySelector('p');
//Parrafo.innerHTML = 'Indica un número del 20 al 100:';]
//creamos abajo una funcion generica con las variables elemento y texto y creamos la variable 
//elementoHTML para asignarle un elemento, para luego poder asignar de manera automatica texto al titulo que traigamos, h1,h2//
let numeroSecreto = 0;
let Intentos = 0;
let ListaNumeroSorteados = [];
let NumeroMaximo = 10;

console.log (numeroSecreto);
console.log(condicionesIniciales);

function asignarTextoElemento(elemento, texto) {
     let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function VerificarIntento() {
 let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

 if (numeroSecreto === numeroDeUsuario ) {
     asignarTextoElemento('p', `¡Acertaste el número secreto en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'} !`);
     document.getElementById('reiniciar').removeAttribute('disabled');
 } else {
     if (numeroDeUsuario > numeroSecreto) {
          asignarTextoElemento('p', 'El número secreto es menor!');
     } else{
          asignarTextoElemento('p', 'El número secreto es mayor!');
     }
     Intentos++;
     limpiarCampo();
 }
return;    
}
function limpiarCampo() {
     document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
 let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
 console.log (NumeroGenerado);
 console.log (ListaNumeroSorteados);
 if(ListaNumeroSorteados.length == NumeroMaximo) {
     asignarTextoElemento('p','Ya se sortearon todos los números posibles');
     } else {
          if(ListaNumeroSorteados.includes(NumeroGenerado)) {
               return generarNumeroSecreto();
          } else {
               ListaNumeroSorteados.push(NumeroGenerado);
               return NumeroGenerado;
          }
     }
}
function condicionesIniciales() {
     asignarTextoElemento('h1', '¡Juego del número secreto!');
     asignarTextoElemento('p' , `Ingresar un número del 1 al ${NumeroMaximo}:`);
     numeroSecreto = generarNumeroSecreto();
     Intentos = 1;
}

function reiniciarJuego() {
//limpiar caja
limpiarCampo();
condicionesIniciales();
//mensajes iniciales
//generar numero aleatorio
//iniciar nuevo intento
//deshabilitar boto nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
