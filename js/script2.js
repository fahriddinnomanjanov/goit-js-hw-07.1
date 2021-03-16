const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients')
const createIngredients = ingredients => {
  return ingredients.map(ingredient => {
  const listIngredientEl = document.createElement('li')
  listIngredientEl.textContent = ingredient
  console.log(listIngredientEl);
  // return listIngredientEl
  // fragment.appendChild(listIngredientEl)
  listIngredientEl.style.listStyle = 'none'
  listIngredientEl.style.color = 'blue'
    
  return listIngredientEl
})
}
const elements = createIngredients(ingredients)
ingredientsEl.append(...elements)


// const createIngredients = ingredients => 
//   ingredients.map(ingredient => {
//   const listIngredientEl = document.createElement('li')
//   listIngredientEl.textContent = ingredient
//   console.log(listIngredientEl);
//   // return listIngredientEl
//   // fragment.appendChild(listIngredientEl)
//   listIngredientEl.style.listStyle = 'none'
//   return listIngredientEl
// })

// const elements = createIngredients(ingredients)
// ingredientsEl.append(...elements)


// console.log(ingradient);

// console.log(ingredients);

// console.log(listIngredientEl);

// ingredientsEl.insertAdjacentHTML(listIngredientEl)


// const titleEl = document.createElement('h2')
// titleEl.textContent = 'sfdfsd'

// console.log(titleEl);


// console.log(ingredients);

// const ingredientsEl = document.querySelector('#ingredients')
// const fragment = document.createDocumentFragment()
// const ingradient = ingredients.map(ingredient => {
//   const listIngredientEl = document.createElement('li')
//   listIngredientEl.textContent = ingredient
//   console.log(listIngredientEl);
//   // return listIngredientEl
//   // fragment.appendChild(listIngredientEl)
//   listIngredientEl.style.listStyle = 'none'
//   return listIngredientEl
// })
// const ingradientFunc = ingradient(ingredients)
// ingredientsEl.append(...ingradient)
// log