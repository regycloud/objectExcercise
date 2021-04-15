const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem) {
  let article = '';
  if (fruitItem[0] == 'a' || fruitItem[0] == 'i' || fruitItem[0] == 'u' || fruitItem[0] == 'e' || fruitItem[0] == 'o') {
    article = 'an';
  } else {
    article = 'a';
  }
  console.log(`I want to eat ${article} ${fruitItem}`)
});

const dimanaBuahApel = fruits.indexOf('apple');
console.log(dimanaBuahApel)
