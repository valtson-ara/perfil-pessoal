const input = document.getElementById('taskInput')
const button = document.getElementById('addTaskBtn')
const list = document.getElementById('taskList')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const p = document.createElement('p')
    const buttonDiv = document.createElement('button')
    

    p.textContent = input.value
    
    div.append(p)
    li.append(div)

    buttonDiv.textContent = "Excluir tarefa"

    div.append(buttonDiv)
    list.append(li)

    document.querySelectorAll("ul button").forEach((value, index) => {
        value.id = `button-${index}`

        value.addEventListener('click', () => {
            list.removeChild(document.getElementById(`button-${index}`).parentElement.parentElement)
         })
    }) 
})