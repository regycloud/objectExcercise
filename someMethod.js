//  The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// slightly different with every, some is just some of any member in array.


const animals = ['cat', 'dog', 'mice', 'giraffe','ant'];

console.log(animals.some(animal => animal.length < 3));
// this will return true, because there is some animal that length less than equal to 3 length characters. Even giraffe is not fulfill the callback function, this will return true as long there is one fulfill the callback function.