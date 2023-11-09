

const user = {
 nameUser: 'John',
surName: 'Smith',
nameUser : 'Pete',

};

delete user.nameUser;
console.log(user);

//////////////////////////

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;
  for(let key in salaries){
    sum += salaries[key];
  }

  console.log(sum);

  //////////////////////////

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(){

    for(let key in menu) {
      
        if(typeof menu[key] === 'number') {
        menu[key] *= 2;
       }
    }

  }

  multiplyNumeric();

   console.log(menu);

   ///////////////////////

  const person = {

    namE: 'Elis',
    age: 20,
    city: 'Odesa',

  };

  console.log(person);

  console.log(person.namE);
  console.log(person.age);
  console.log(person.city);

  console.log(person['namE']);
  console.log(person['age']);
  console.log(person['city']);

  console.log();
  ////////////////////////////////

  const car = {
    make: 'USA',
    model: 'S300',
    year: 2005,
  };

  car.year = 2023;
  console.log(car);

  console.log();
  ////////////////////////////////

  const student = {
    namE: 'Tim',
    age: 22,
    grades: [8 , 5, 8, 3 , 5],
  };

  for(let key in student) {
    console.log(student[key]);
  }

  console.log();
  ////////////////////////////////

  const book = {

    title: 'Java',
    author: 'Babaian',
    year: 2025,
  };

  const hasPub = 'publisher' in book;
  console.log(hasPub);

  console.log();
  ////////////////////////////////

const fruit = {

    fruitName: 'apple',
    color: 'red',
    taste: 'sweet',
};

delete fruit.taste;
console.log(fruit);

///////////////

let userOr = {
  name: "John",
  age: 30
};

console.log(userOr);

let userCop = Object.assign({}, userOr);
console.log(userCop);

userCop.name = 'Tim';
console.log(userCop);

let userJ = {
  name: "John",
  age: 30
};

userJ.sayHi = function() {
  console.log("Привет!");
};

userJ.sayHi();

/////////////////////////////////////

const person1 = {

  perName: 'Jack',
  
  greet(){
    return 'My name is '+this.perName;
  }

};

console.log(person1.greet());

//////////////////////////////////

const circle = {

  areaC: 5,

  calculateArea() {
      return this.areaC;
  }
};

console.log(circle.calculateArea());

const rectangle = {
    areaR: 15,

    calculateArea() {
      return this.areaR;
    }
};

console.log(rectangle.calculateArea()); 

/////////////////////////////////////////


const calculator = {

  add(a, b) {
      return a + b;
  },

  subtract(c, d) {
    return c - d;
  },

};

console.log(calculator.add(5,20));
console.log(calculator.subtract(10,5));

///////////////////////////////////////


const user2 = {

  nameUser: 'Elis',
  email: 'example@gmail.com',
  
  printInfo () {
    
    console.log(this.nameUser, this.email);
  },

};

user2.printInfo();

//////////////////////////////////


function User (name, age, status) {
  this.name = name;
  this.age = age;
  this.status = status;
}

let u = new User('Elis', 15, 'female');
console.log(u);

let u2 = new User('Dima', 27, 'male');
console.log(u2);

////////////////////////////////////


















