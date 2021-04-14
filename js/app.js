const button = document.querySelector('#btn')
const body = document.querySelector('body')
const hexValues = ['A', 'B', 'C', 'D', 'E', 'F',0,1,2,3,4,5,6,7,8,9]
const value = document.querySelector('#hex-value')

button.addEventListener ('click', changeHex)

function changeHex(){

    let hex = '#'
    for(let i = 0; i < 6; i++){
        const index = Math.floor(Math.random()*hexValues.length)
        hex+= hexValues[index]
    }
    value.textContent = hex
    body.style.backgroundColor = hex

}