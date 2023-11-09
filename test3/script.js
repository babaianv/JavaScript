// let ques = prompt("Какое «официальное» название JavaScript?");

// if(ques === "ECMAScript") {
//    alert("Right");
// }else{
//     alert("Not right");
// }

// let a = 2;
// let b = 1;
// let result = (a + b < 4) ? 'мало' : 'много';

// console.log(result);

// let message = (login == 'Сотрудник') ? 'Hi':
// (login == 'Директор') ? 'Hello':
// (login == '') ? 'Нет логина': '';

////////////////////////////////

const number = 5;

if (number > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is not positive");
}

////////////////////////////////////

const res = number > 0 ? "Number is positive" : "Number is not positive";
console.log(res);

//////////////////////////////

const number2 = 12;

if (number2 % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

let a = 5;
let b = 7;

if (a < b) {
  console.log(a);
} else {
  console.log(b);
}

//////////////////////////////

const text = "Hello";

if (text.length > 5) {
  console.log("Длина строки больше 5 символов");
} else {
  console.log("Длина строки не более 5 символов");
}

//////////////////////////

const age = 13;

if (age >= 14 && age <= 90) {
  console.log("yes");
} else {
  console.log("no");
}

if (!(age >= 14 && age <= 90)) {
  console.log("yes");
} else {
  console.log("no");
}

////////////////////////////////

// let log = prompt('Enter ur login');

// if(log === 'Admin') {

//    let pas =  promt('Enter ur password');

//    if(pas === 'Я главный') {
//         alert('Здравствуйте!' );
//     }else if(pas === '' || pas === null) {
//         alert( 'Отменено' );
//     } else{
//         alert( 'Неверный пароль' );
//     }

// } else if (userName === '' || userName === null) {
//     alert('Canceled');
// }else{
//     alert( "Я вас не знаю" );
// }

///////////////////////////

const isTrue = true;
const isFalse = false;

console.log(isTrue || isFalse); // true

/////////////////////////////////

const isA = true;
const isB = true;

console.log(isA && isB); // true

/////////////////////////////

const isTruE = true;

console.log(!isTruE); // false

//////////////////////////////

let value = null;

value ||= "Default Value";
console.log(value);

/////////////////////////////

const email = "jgjgkffn@gmail.com";
const isValidEmail = false;

if (email && isValidEmail) {
  console.log("Email валиден");
} else {
  console.log("Email невалиден");
}

///////////////////////////////

const val = "Hello";

if (val !== null && val !== undefined) {
  console.log("Значение существует");
} else {
  console.log("Значение отсутствует");
}

/////////////////////////////////

const username = "Valentyna";
const password = "12345";
const isLoggedIn = true;

if (username && password && isLoggedIn) {
  console.log("Добро пожаловать");
} else {
  console.log("Ошибка входа");
}

////////////////////////////

const isWeekend = true;
const isSunny = false;

if ((isWeekend || isSunny) && (isWeekend || isSunny)) {
  console.log("Хорошее время для отдыха");
} else {
  console.log("Погода не подходит");
}

//////////////////////////////

let v = null;
v ??= 10;
console.log(v);

/////////////////////////////

const n = "Valentyna";
const defaultName = "Гость";

n ??= defaultName;
console.log(n);

//////////////////////////////

let score = null;

score ??= 0;
console.log(score);

/////////////////////////

const user = {
  name: "John",
  age: 30,
};

let userAge = user.age;

userAge ??= 18;
console.log(userAge);

console.log("");
////////////////////

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

///////////////////////////
console.log("");

let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

console.log("");

////////////////////////////

let w;

// do {
//    w = prompt('Enter number > 100', 0);
// }while (w <= 100 && w !== null);

///////////////////////////////

let p = 10;


for (let i = 2; i <=p; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    
    if(i % j === 0) {
      isPrime = false;
      break;
    }
  }
    if(isPrime) {
      console.log(i);
    }
}

