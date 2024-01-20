const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('li.item');

console.log(`Total categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryItems = item.querySelectorAll('ul li');
  console.log(`Category: ${categoryTitle}, Items: ${categoryItems.length}`);
});