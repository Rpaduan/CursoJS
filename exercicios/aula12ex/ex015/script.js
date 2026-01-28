function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            document.body.style.background = 'rgb(70, 142, 236)'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

                
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            document.body.style.background = 'rgb(247, 183, 193)'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectanos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}