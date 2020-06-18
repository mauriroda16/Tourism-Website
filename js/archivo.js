function mostrarElemento (caja){
    var elemento = document.getElementById(caja)

    elemento.style.display='block'
}

function ocultarElemento (caja, caja2){
    var elemento = document.getElementById(caja)
    var elemento2 = document.getElementById(caja2)
    elemento.style.display='none'
    elemento2.style.display='none'
}

function juego () {
    var destinos = ["BORA-BORA", "BRASIL", "ALEMANIA", "TUNEZ", "PERÚ", "BOLIVIA", "PARAGUAY", "URUGUAY", "CUBA", "INGLATERRA", "SUECIA"]
    var nro = prompt('Elegi un numero entre 0 y 10')
    var codigo= prompt('Elegí entre estos destinos al que te gustaría viajar: CUBA/URUGUAY/INGLATERRA/SUECIA/PARAGUAY/BOLIVIA/PERÚ/TUNEZ/ALEMANIA/BRASIL/BORA-BORA')

    if(codigo==destinos[nro]){
        alert('Ganaste un viaje para vos y diez personas!')
    } 
    else{
        alert('Perdiste =/')
    }
    

}