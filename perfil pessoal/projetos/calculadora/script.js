let arr = []
let arrOutrosIndices = []

document.querySelectorAll(".btns button").forEach((value) => {
    if (value.textContent === '=' || value.textContent === 'C') {
        return arrOutrosIndices.push(value)
    } else {
        return arr.push(value)
    }
    
})
console.log(arr)
arr.forEach((value) => {
    value.addEventListener("click", () => {
        document.getElementById("display").textContent =  document.getElementById("display").textContent += value.textContent
    })
})

document.querySelectorAll(".btns button")[18].addEventListener("click", () => {
    let result =''
    const arr = document.getElementById("display").textContent.split('')
    
    arr.forEach((value, i) => {
        if (value === 'x') {
            arr.splice(i, 1, '*')
        }
    })
    arr.forEach((value) => {
        return result += value
    })

    document.getElementById('display').textContent = eval(result)
})

arrOutrosIndices[0].addEventListener("click", () => {
    let result = ''
    const arr = document.getElementById("display").textContent.split('')
    
    arr.pop()
    arr.forEach((value) => {
        return result += value
    })
    document.getElementById("display").textContent = result
})

arrOutrosIndices[1].addEventListener("click", () => {
    let result = ''
    const arr = document.getElementById("display").textContent.split('')
    
    arr.pop()
    arr.forEach((value) => {
        return result += value
    })
    document.getElementById("display").textContent = result
})