const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      },
      get courses() {
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        }
      },
      set appetizers(appetizerIn) {
        this._courses.appetizers = appetizerIn
      },
      get appetizers() {
        return this._courses.appetizers;
      },
      set mains(mainsIn) {
        this._courses.mains = mainsIn;
      },
      get mains() {
        return this._courses.mains;
      },
      set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
      },
      get desserts() {
        return this._courses.desserts;
      },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dishes = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dishes);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const random = Math.floor(Math.random() * dishes.length);
      return dishes[random];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice} dollars.`;
    }
    ,
  };
  
  menu.addDishToCourse('appetizers', 'seblak', 3);
  menu.addDishToCourse('appetizers', 'milky cheese', 1.5);
  menu.addDishToCourse('appetizers', 'nugget', 2);
  
  menu.addDishToCourse('mains', 'fried rice', 5);
  menu.addDishToCourse('mains', 'roasted duck', 7);
  menu.addDishToCourse('mains', 'chicken soup', 4);
  
  menu.addDishToCourse('desserts', 'jelly your jelly', 2.5);
  menu.addDishToCourse('desserts', 'ice milo kepal', 1.5);
  menu.addDishToCourse('desserts', 'red bean ice cream', 3);
  
  const meal = menu.generateRandomMeal();
  console.log(menu._courses.mains.push('ayam kuluyuk'));
  console.log(menu.courses.mains);
  console.log(meal);



  
  