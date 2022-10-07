(function(){
    // Gera Key aleatória
    var randomKey = getRandomKey(15)
    // Gera data
    var date = getDate()
    // Link Gerado
    var href = randomKey + date + randomKey
    
    var link = document.getElementById('linkModerated')
    link.href = `https://moderated.jitsi.net/${href}`

    console.log(link.href)
    console.log(link)
})()