const dadosDasCartas = [
    {img: 'baixados.jpg', id: 1},
    {img: 'Chiron.jpg', id: 2}, 
    {img: 'Lamborghini.jpg', id: 3}, 
    {img: 'baixados.jpg', id: 1}, 
    {img: 'Chiron.jpg', id: 2}, 
    {img: 'Lamborghini.jpg', id: 3} 
]

let cartasViradas = []
let tentativas = 0
let paresEncontrados = 0
let estaVirando = false

const elementosDeCarta = document.querySelectorAll('.carta') 
const elementoMensagem = document.getElementById('mensagem')
const elementoTentativas = document.getElementById('tentativas')
const botaoReiniciar = document.getElementById('botao-Reiniciar')

function embaralharCartas() {
    for(let i = dadosDasCartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dadosDasCartas[i], dadosDasCartas[j]] = [dadosDasCartas[j], dadosDasCartas[i]];
    }
}

function iniciarJogo() {
    embaralharCartas()

    cartasViradas = []
    paresEncontrados = 0
    tentativas = 0

    elementoTentativas.textContent = tentativas
    elementoMensagem.textContent = 'Encontre todos os pares!' 

    elementosDeCarta.forEach((carta, indice) => {
        carta.classList.remove('flip')
        carta.style.backgroundImage = 'none'
        
        carta.addEventListener('click', () => virarCarta(indice))

        carta.dataset.id = dadosDasCartas[indice].id
    })

    if(localStorage.getItem('tentativasDoJogo')) {

        const tentativasSalvas = JSON.parse(localStorage.getItem('tentativasDoJogo'))
        tentativasSalvas.push({rodada: Date.now(), tentativas: 0})

        localStorage.setItem('tentativasDoJogo', JSON.stringify(tentativasSalvas))
    } else {
        localStorage.setItem('tentativasDoJogo', JSON.stringify([{rodada:Date.now() , tentativas: 0}]))
    }

}

function virarCarta(indice) {
    if(estaVirando || elementosDeCarta[indice].classList.contains('flip')) return

    elementosDeCarta[indice].classList.add('flip')
    elementosDeCarta[indice].style.backgroundImage = `url(${dadosDasCartas[indice].img})`
    cartasViradas.push(indice)

    if(cartasViradas.length === 2) {
        estaVirando = true

        setTimeout(() => {
            varificarPar()
            estaVirando = false
        }, 1000)
    }
}

function varificarPar() {
    const [primeiroIndice, segundoIndice] = cartasViradas

    if(dadosDasCartas[primeiroIndice].id === dadosDasCartas[segundoIndice].id) {
        paresEncontrados++

        if(paresEncontrados === dadosDasCartas.length / 2) {
            elementoMensagem.textContent = 'PARABÉNS! Você encontrou todos os pares!'
        }
    } else {
        elementosDeCarta[primeiroIndice].classList.remove('flip')
        elementosDeCarta[primeiroIndice].style.backgroundImage = 'none'
        elementosDeCarta[segundoIndice].classList.remove('flip')
        elementosDeCarta[segundoIndice].style.backgroundImage = 'none'
    }

    cartasViradas = []
    tentativas++
    elementoTentativas.textContent = tentativas
    let tentativasSalvas = JSON.parse(localStorage.getItem('tentativasDoJogo'))
    tentativasSalvas[tentativasSalvas.length - 1].tentativas = tentativas
    localStorage.setItem('tentativasDoJogo', JSON.stringify(tentativasSalvas))
}

botaoReiniciar.addEventListener('click', () => {
    iniciarJogo()
})

// Iniciar o jogo
iniciarJogo()



   