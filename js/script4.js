const decrementEl = document.querySelector('#counter [data-action="decrement"]')
const incrementEl = document.querySelector('#counter [data-action="increment"]')
const value = document.getElementById('value')
let num = 0;


decrementEl.addEventListener('click', funcDecrement)
function funcDecrement() {
    num -=1
    value.textContent = num
}


incrementEl.addEventListener('click', funcIncrement)
function funcIncrement() {
    num +=1
    value.textContent = num
}