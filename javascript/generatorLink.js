'use strict';

var nameMeeting = document.querySelector('#nameMeeting').value
var linkResult = document.querySelector('#linkResult')
var generator = document.getElementById('generator')
var generatedLink = document.getElementById('generatedLink')
var form = document.getElementById('form')

form.addEventListener('submit', createLink)

function getRandomKey(size) {
    var randomKey = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for(var i = 0; i < size; i++) {
        randomKey += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomKey;
}

function getDate() {   
    var year =      new Date().getFullYear().toString()
    var month =     new Date().getMonth().toString()
    var day =       new Date().getDay().toString()
    var hours =     new Date().getHours().toString()
    var minutes =   new Date().getMinutes().toString()
    
    // console.log('Data separa:', hours, minutes, day, month, year)
    
    var formattedDate = hours + minutes + day + month + year

    return formattedDate
}

function verifyNameMeeting() {
    var content = document.querySelector("#nameMeeting").value.length

    if (content > 1 ) { return true } else { return false } 
}

function setError(){
    var field = document.getElementById('nameMeeting')
    field.style.border = '3px solid #e63636'
}

function removeError(){
    var field = document.getElementById('nameMeeting')
    field.style.border = ''
}

function createLink(event) {
    event.preventDefault()

    if(!verifyNameMeeting()) return setError()

    removeError()

    var string = getRandomKey(10)
    var date = getDate()
    var nameMeeting = document.querySelector('#nameMeeting').value
    nameMeeting = nameMeeting.split(" ").join("")

    // Apenas para desenvolvimento

    console.log('-----')
    console.log(`Nome da reunião: ${nameMeeting}`)
    console.log(`String gerada: ${string}`)
    console.log(`Data: ${date}`)
    console.log('-----')
    console.log(`Link gerado: https://meet.jit.si/${string + date + nameMeeting}`)
    console.log('-----')

    linkResult.value = `https://meet.jit.si/${string + date + nameMeeting}`
    generator.style.display = 'none'
    generatedLink.style.display = 'flex'
}
