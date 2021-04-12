// JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.



const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
}

// Write your code below
// What if we wanted to rename this function without sacrificing the source code? We can re-assign the function to a variable with a suitably short name.
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  is2p2();

// Since functions are a type of object, they have properties such as .length and .name and methods such as .toString().
  console.log(is2p2.name);