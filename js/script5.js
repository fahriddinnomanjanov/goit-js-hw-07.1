// const input

/*Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
подставляет его текущее значение в span#name - output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.*/

const input = document.getElementById('name-input')
const spanValue = document.getElementById('name-output')

input.addEventListener('input', valueInput)

function valueInput(event) {
    if (event.currentTarget.value === '') {
        spanValue.textContent = 'незнакомец'
    } else {
        spanValue.textContent = event.currentTarget.value;
        console.log(event.currentTarget.value);
    }
}