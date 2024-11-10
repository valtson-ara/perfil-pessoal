const btnBack = document.getElementById('back')
const btnForward = document.getElementById('forward')
const card = document.getElementById('card-one')
const projetos = document.getElementById('projetos')

btnBack.addEventListener('click', () => {
    projetos.scrollBy(-(card.clientWidth + 48), 0)
})

btnForward.addEventListener('click', () => {
    projetos.scrollBy(card.clientWidth + 48, 0)
})
