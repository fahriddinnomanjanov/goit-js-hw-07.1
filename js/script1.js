const listCategories = document.querySelectorAll('.item')
console.log(`В списке ${listCategories.length} категории.`);
// const listCategories = document.querySelectorAll('.item')

for (const listCategory of listCategories) {
    const h2 = listCategory.firstElementChild.textContent;
    const listItem = listCategory.lastElementChild.querySelectorAll('ul li').length
    console.log(`Категория: ${h2} Количество элементов: ${listItem}`);
}



