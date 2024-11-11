const btnBranco = document.getElementById('branco')
const btnVermelho = document.getElementById('vermelho')
const btnResetar = document.getElementById('resetar')
const btnAcelerar = document.getElementById('acelerar')
const btnDesacelerar = document.getElementById('desacelerar')
const carRed = document.getElementById('red')
const carWhite = document.getElementById('white')
const result = document.getElementById('result')
let carroSelecionado 
let velocidade = 0

function selecionarCarro (tag, value) {
        carroSelecionado = tag
        result.textContent = value
        document.querySelector('body').style.backgroundColor = value
        tag.focus()
}

function resetar () {
    window.location.reload()
}

btnBranco.addEventListener('click', () => {
    selecionarCarro(carWhite, 'white')
    result.style.color = 'black'
    btnDesacelerar.style.color = 'black'
    btnAcelerar.style.color = 'black'
    btnResetar.style.color = 'black'
    document.querySelector('.text h1').style.color = 'black'
    document.querySelector('.text p').style.color = 'black'
})

btnVermelho.addEventListener('click', () => {
    selecionarCarro(carRed, 'red')
})

carRed.addEventListener('click', () => {
    selecionarCarro(carRed, 'red')
})

carWhite.addEventListener('click', () => {
    selecionarCarro(carWhite, 'white')
    result.style.color = 'black'
    btnDesacelerar.style.color = 'black'
    btnAcelerar.style.color = 'black'
    btnResetar.style.color = 'black'
    document.querySelector('.text h1').style.color = 'black'
    document.querySelector('.text p').style.color = 'black'
})

btnAcelerar.addEventListener('click', () => {
    carroSelecionado.style.transform = `translateY(${velocidade -= 10}px)`
})

btnDesacelerar.addEventListener('click', () => {
    carroSelecionado.style.transform = `translateY(${velocidade += 10}px)`
})

btnResetar.addEventListener('click', resetar)

carRed.setAttribute('tabindex', '0')
carWhite.setAttribute('tabindex', '0')

carRed.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    if (ev.key === 'ArrowUp') {
         carroSelecionado.style.transform = `translateY(${velocidade -= 10}px)`
    }

    if (ev.key === 'ArrowDown') {
        carroSelecionado.style.transform = `translateY(${velocidade += 10}px)`
    }
})

carWhite.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    if (ev.key === 'ArrowUp') {
         carroSelecionado.style.transform = `translateY(${velocidade -= 10}px)`
    }

    if (ev.key === 'ArrowDown') {
        carroSelecionado.style.transform = `translateY(${velocidade += 10}px)`
    }
})