'use strict';

var nameMeeting = document.getElementById('nameMeeting')
var buttonSubmit = document.getElementById('buttonSubmit')
var link = document.getElementById('link')

buttonSubmit.addEventListener('click', createLink)

function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

function getDate() {
    
}

function createLink(e) {
    var string = geraStringAleatoria(10)

    // Apenas para desenvolvimento
    console.log(`Nome da reunião: ${nameMeeting.value}`)
    console.log(`String gerada: ${string}`)
    console.log(`Link gerado: https://meet.jit.si/${string + nameMeeting.value}`)


    link.href = `https://meet.jit.si/${string + nameMeeting.value}`
    link.style.display = 'block'
    e.preventDefault()
}


