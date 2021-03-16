    const typeNumbersEl = document.querySelector('#controls>input')
    const renderNumbersData = document.querySelector('[data-action="render"]')
    const destroyNumbersData = document.querySelector('[data-action="destroy"]')
    const boxesEL = document.getElementById('boxes')
    
const renderBoxes = function (amount) {
    
    let array = []
    let width = 30;
    let height = 30;
    for (let i = 1; i <= amount; i ++){
        const createElBox = document.createElement('div')
        console.log(createElBox);
        createElBox.style.width = `${width}px`
        createElBox.style.height = `${height}px`
        createElBox.style.backgroundColor = get_rand_color()
        width += 10;
        height += 10
        console.log(createElBox);
        array.push(createElBox)
        console.log(array);
    }
    boxesEL.append(...array)
}

function createBoxes() {
    const inputValue = +typeNumbersEl.value
    renderBoxes(inputValue)
}
    

function destroyBoxes() {
    console.log('sfdfdsfdsf');
    boxesEL.innerHTML = '';
}
    
renderNumbersData.addEventListener('click', createBoxes)
destroyNumbersData.addEventListener('click', destroyBoxes)


const get_rand_color = function ()
{
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

// function randomColor(){
//    var allowed = "ABCDEF0123456789", S = "#";

//    while(S.length < 7){
//        S += allowed.charAt(Math.floor((Math.random()*16)+1));
//    }
//    return S;
// }




{/* <div id="controls">
      <input type="number" min="0" max="100" step="1" />
      <button type="button" data-action="render">Создать</button>
      <button type="button" data-action="destroy">Очистить</button>
    </div>

    <div id="boxes"></div> */}

    /*
     
    Напиши скрипт создания и очистки коллекции элементов. 
    Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
    после чего рендерится коллекция. При нажатии на кнопку Очистить, 
    коллекция элементов очищается.

    Создай функцию createBoxes(amount), 
    которая принимает 1 параметр amount - число. 
    Функция создает столько div, 
    сколько указано в amount и добавляет их в div#boxes.

    Каждый созданный div:

    Имеет случайный rgb цвет фона
    Размеры самого первого div - 30px на 30px
    Каждый следующий div после первого, 
    должен быть шире и выше предыдущего на 10px
    Создай функцию destroyBoxes(), которая очищает div#boxes.
    
    */

    /**
     * 
     */
