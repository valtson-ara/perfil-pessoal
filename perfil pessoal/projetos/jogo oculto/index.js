numeroAleatorio = Math.floor(Math.random() * 100)
numeroTentativas = 5

/* Faz a verificação do número escolhido pelo usuário*/
function verificacao (numeroEscolhido, numeroAleatorio, result) {

    if (parseFloat(numeroEscolhido) === numeroAleatorio) {

        result.textContent = "Acertou"
        alert('Você conseguiu acertar!')
        location.reload()

    } else if (parseFloat(numeroEscolhido) > numeroAleatorio) {

        result.textContent = "Menor"
        numeroTentativas -= 1
        document.getElementById("tentativas").textContent = `Número de tentativas ${numeroTentativas}`
        document.getElementById("enviar").textContent = "tente novamente"
    
    } else if (parseFloat(numeroEscolhido) < numeroAleatorio) {

        result.textContent = "Maior"
        numeroTentativas -= 1
        document.getElementById("tentativas").textContent = `Número de tentativas ${numeroTentativas}`
        document.getElementById("enviar").textContent = "tente novamente"
    
    }


    if (numeroTentativas === 0) {
        alert('Você não conseguiu acertar!')
        location.reload()
    }
}

/* Adiciona o evento no formulário*/
document.querySelector('form').addEventListener('submit', (ev) => {
    ev.preventDefault()
    result = document.getElementById("result")
    numeroEscolhido = document.getElementById('value').value

    verificacao(numeroEscolhido, numeroAleatorio, result)
    document.querySelector("form").reset()
})

console.log(numeroAleatorio)





