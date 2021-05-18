const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animalItem => {
  return animalItem[0];
})
console.log(secretMessage.join(''));

// Create the smallNumbers array below

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => {
  return number/100;
})



// This excercise is one of dicoding Academy quiz

/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */
/*const currency = {
  USD: 14000,
  JPY: 131,
  SGD: 11000,
  MYR: 3500
} */
const currency = new Map([
  ["USD", 14000], 
  ["JPY", 131], 
  ["SGD", 11000], 
  ["MYR", 3500]
 ]);
const priceInJPY = 5000;
const priceInIDR = currency.get("JPY") * priceInJPY;
console.log(currency.get("JPY"));

// TODO


/**
 * Hiraukan kode di bawah ini
 */
module.exports = { currency, priceInJPY, priceInIDR };
