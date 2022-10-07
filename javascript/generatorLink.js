// 'use strict';

var nameMeeting =   document.querySelector('#nameMeeting').value
var field =         document.getElementById('nameMeeting')
var linkResult =    document.querySelector('#linkResult')
var buttonOpen =    document.getElementById('openLinkMeeting')
var generator =     document.getElementById('generator')
var generatedLink = document.getElementById('generatedLink')
var form =          document.getElementById('form')
var card =          document.getElementById('card')

var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
var removeCharacters = ['!','@', '#', '$', '%','¨','&','*', '(', ')', '-','_', '+', '.', ':', '"', "'", '=', '/', ' ']

// Functions

// Name Validated

function verifyNameMeeting(nameMeeting) {
    if(!regex.test(nameMeeting)) {
        for(var i = 0; i < removeCharacters.length; i++) {
            nameMeeting = nameMeeting.split(removeCharacters[i]).join("")
        }
    }

    if (nameMeeting.length > 1) { return nameMeeting } else { return false }
}

function getRandomKey(size) {
    var randomKey = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for(var i = 0; i < size; i++) {
        randomKey += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return randomKey
}

function getDate() {
    var dateMoment = new Date()
    var year =      dateMoment.getFullYear().toString()
    var month =     dateMoment.getMonth().toString()
    var day =       dateMoment.getDate().toString()
    var hours =     dateMoment.getHours().toString()
    var minutes =   dateMoment.getMinutes().toString()
    var formattedDate = hours + minutes + day + month + year

    return formattedDate
}

// Style

function setError(){
    field.style.border = '2px solid #e63636'
}

function removeError(){
    field.style.border = ''
}

// Create Meeting

function createLink(event) {
    event.preventDefault()

    var getNameMeeting = document.querySelector('#nameMeeting').value
    var nameMeeting = verifyNameMeeting(getNameMeeting)

    // Validate name
    if(nameMeeting == false) return setError()

    // Remove Erro
    removeError()

    // Gera Key aleatória
    var randomKey = getRandomKey(10)

    // Gera data
    var date = getDate()
    
    // Resultado
    var link = `https://meet.jit.si/${randomKey + date + nameMeeting}`

    // Definir link nos Botões
    linkResult.value = link
    openLinkMeeting.href = link

    // Style

    // Card inicial
    generator.style.display = 'none'

    // Altura do card
    card.style.height = '332px'

    // Card com resultado
    generatedLink.style.display = 'flex'

    // Apenas para desenvolvimento

    console.log('-----')
    console.log(`Nome da reunião: ${nameMeeting}`)
    console.log(`String gerada: ${randomKey}`)
    console.log(`Data: ${date}`)
    console.log('-----')
    console.log(`Link gerado: https://meet.jit.si/${randomKey + date + nameMeeting}`)
    console.log('-----')
}

// Start Application

form.addEventListener('submit', createLink)
