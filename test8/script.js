
function Person (name, age) {

    this.name = name;
    this.age = age;

}
    Person.prototype.sayHello = function() {
        return 'Hello, my name is ' + this.name + ' and my age is ' + this.age;
    };


let person1 = new Person('Elis', 20);
console.log(person1);

console.log(person1.sayHello());

/////////////////////////////////

function Calculate () {

    this.result = 0;
}

   Calculate.prototype.add = function(num) {
    
    this.result += num;

   };

   Calculate.prototype.subtract = function(num) {

    this.result -=num;
   };

   let calculator = new Calculate();

   calculator.add(10);
   calculator.subtract(5);

   console.log(calculator.result);

   //////////////////////////////

   function Book (title, author, year) {

    this.title = title;
    this.author = author;
    this.year = year;

   }

   Book.prototype.getInfo = function() {
    
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
   };

   let book = new Book('Java' , 'Dima' ,2012);
   console.log(book.getInfo());


   /////////////////////////////////////

   function Product (name , price, quantity) {

        this.name = name;
        this.price = price;
        this.quantity = quantity;
   }

   Product.prototype.getTotalPrice = function() {

        return this.price * this.quantity;
   };

   let product = new Product('Milk', 2, 10);
   console.log(product.getTotalPrice());

////////////////////////////////////////


function Rectangle (width, height) {
    
    this.width = width;
    this.height = height;
} 

Rectangle.prototype.calculArea = function() {

    return this.width * this.height;
};

let rectangle = new Rectangle(5,10);

console.log(rectangle.calculArea());

//////////////////////////////////////////

const person11 = {
    namePer: 'Elis',
    address: 'Odesa',
    phone: '1234556644',
};

const a = person11.namePer?? 'Unknown';
console.log(a);

const company = {

    name:'Santander',

    employees:{
        name: 'Anna',
        age: 20,
    },

};

const b = company.name?? 'Unknown';
console.log(b);

const b2 = company.employees?.age?? 'Unknown';
console.log(b2);

const b3 = company.status?? 'Unknown';
console.log(b3);


function getAge (company) {
    console.log(company.employees?.age?? 'Unknown');
}

getAge(company);

////////////////////////////////////

const colors = ['red', 'green', 'blue'];

////va1
const secondColorSafe = colors[1]?? 'Undefine';
console.log(secondColorSafe);

////va2

const firstColor = colors[0]?.toUpperCase();
console.log(firstColor);

