// Variables
let numeroMaximoPosible = 100;
let numeroMinimoPosible = 20;
let numeroSecreto = Math.floor(Math.random()*(numeroMaximoPosible-numeroMinimoPosible+1))+numeroMinimoPosible;
let NumeroDeUsuario = 0;
let intentos = 1;
//let PalabraVeces = 'vez';
let máximosIntentos = 5;
console.log(numeroSecreto);
while(NumeroDeUsuario != numeroSecreto) {

    NumeroDeUsuario = parseInt(prompt(`Me indicas un número entre el ${numeroMinimoPosible} y ${numeroMaximoPosible} Por Favor:`));
    //La función parseInt() en JavaScript se utiliza para convertir una cadena de texto (string) en un número entero, 
    // permitiendo especificar la base numérica en la que se interpretará el número, nuestro if comparaba == 
    // eso me permite que se pueda compara numero y string (texto) si fuera escrito === pasaria a error//
    console.log(typeof(NumeroDeUsuario));
    //condiciones
    if(NumeroDeUsuario == numeroSecreto) {
        alert(`acertaste, el número es: ${NumeroDeUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);

    } 
    else{
        if (NumeroDeUsuario > numeroSecreto) {
            alert('El número secreto es Menor');
        }
            else{
                alert('El número secreto es Mayor');
            }
    intentos++;
    //PalabraVeces = 'veces';
    }
    if(intentos > máximosIntentos) { alert(`Legaste el número máximo de ${máximosIntentos} intentos.`);
        break;
    };
    }
