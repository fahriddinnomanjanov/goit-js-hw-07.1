const inputValidation = document.getElementById('validation-input')

inputValidation.addEventListener('input', makeValidInput)

function makeValidInput(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
       
        inputValidation.classList.add('valid')
        inputValidation.classList.remove('invalid')
        
    } else {
        inputValidation.classList.add('invalid')
        inputValidation.classList.remove('valid')
    }
}