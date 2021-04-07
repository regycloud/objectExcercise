// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    // using 'get' syntax to use getter
    get energyLevel() {
        /* If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.
        
        Add an else statement that returns 'System malfunction: cannot retrieve energy level'.
        */
      if (typeof(this._energyLevel) === 'number') {
        return `My current energy level is ${this._energyLevel}` 
      } else {
        return `System malfunction: cannot retrieve energy level`;
      }
    } 
};


console.log(robot.energyLevel);
  
  
  