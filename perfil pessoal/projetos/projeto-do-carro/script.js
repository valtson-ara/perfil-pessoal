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

    if (velocidade > -40 && carroSelecionado.id === 'red') {
        carroSelecionado.style.transform = `translate(${-12}px,${velocidade -= 10}px)`
    } else if (velocidade > -40 && carroSelecionado.id === 'white') {
         carroSelecionado.style.transform = `translate(${12}px,${velocidade -= 10}px)`
    }
})

btnDesacelerar.addEventListener('click', () => {

    if (velocidade < 30 && carroSelecionado.id === 'red') {
        carroSelecionado.style.transform = `translate(${-7}px,${velocidade += 10}px)`
    } else if (velocidade < 30 && carroSelecionado.id === 'white') {
         carroSelecionado.style.transform = `translate(${7}px,${velocidade += 10}px)`
    }
    
})

btnResetar.addEventListener('click', resetar)

carRed.setAttribute('tabindex', '0')
carWhite.setAttribute('tabindex', '0')

carRed.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    if (ev.key === 'ArrowUp' && velocidade > -40) {
         carroSelecionado.style.transform = `translate(${-12}px,${velocidade -= 10}px)`
    }

    if (ev.key === 'ArrowDown' && velocidade < 30) {
        carroSelecionado.style.transform = `translate(${-7}px,${velocidade += 10}px)`
        
    }
})

carWhite.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    if (ev.key === 'ArrowUp' && velocidade > -40) {
         carroSelecionado.style.transform = `translate(${12}px,${velocidade -= 10}px)`
    }

    if (ev.key === 'ArrowDown' && velocidade < 30) {
        carroSelecionado.style.transform = `translate(${7}px,${velocidade += 10}px)`
    }
})