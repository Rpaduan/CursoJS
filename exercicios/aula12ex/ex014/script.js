function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
//var hora = 7
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora >= 6 && hora < 12) {
    //BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = '#80C3F7'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background = '#DF823F'
} else {
    //BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background = '#273F43'
}
}

