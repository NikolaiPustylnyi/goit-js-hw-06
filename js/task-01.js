const item = document.querySelectorAll('.item');
const itemLength = item.length;

console.log('Number of categories:', itemLength);
const itemList = [...item];

itemList.forEach(function (element) {
    const elementsCount = element.querySelectorAll('li');
    const categoryName = element.querySelector('h2');
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${elementsCount.length}`);
});