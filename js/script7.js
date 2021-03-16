const rangeControl = document.getElementById('font-size-control')
const spanText = document.getElementById('text')


rangeControl.addEventListener('input', makeRangeControl)

function makeRangeControl() {
    spanText.style.fontSize = rangeControl.value + 'px'
    
}