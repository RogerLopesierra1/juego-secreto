let numeroSecreto = 0;
intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
    document.querySelector('#reiniciar').removeAttribute('disabled');
  }else{
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', `el numero es mayor`);
    } else {
      asignarTextoElemento('p', `el numero menor`);
    }
    intentos++;
    limpiarCaja()
  }

}

function limpiarCaja(){
  document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
  // si ya sorteamos todos los numeros
  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles');
  }else{
    // si numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
  
}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'juego del numero secreto');
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  // limpiar caja
  limpiarCaja();
  // indicar mensaje de numero aleatorio
  // generar el numero aleatorio
  // inicializar el numero de intentos
  condicionesIniciales();
  // deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  
}

condicionesIniciales();
