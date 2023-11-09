
const myName = 'Valentyna';
console.log(myName);


////////////////////////

let x = 5;
let y = 10;

console.log(`Sum: ${x +y}`);

//////////////////////////

const friendName = 'John',
friendAge = 22,
profession = 'Developer';

console.log(`Name: ${friendName}; Age: ${friendAge};
Profession: ${profession}`);

//////////////////////////

let a = 5;
let b = 7;

[a , b] = [b , a];

console.log(`a = ${a}; b = ${b};`);

///////////////////////

let age = 22;
let isAdult = age >= 18;
console.log(isAdult);

/////////////////////////

let favoriteColor = 'black';
console.log(`My favorite color is ${favoriteColor}`);

/////////////////////////

let number = 5;
console.log(`Sum: ${number * 2}`);

/////////////////////////

let length = 5;
let width = 5;

console.log(`Square: ${length * width}`);

////////////////////////

let str = 'Valentyna';
console.log(str.length);

///////////////////////////

const temperatureCelsius = 35;
const faringate = temperatureCelsius *  9/5 + 32;

console.log(faringate);

/////////////////////////

let isRaining = false;

if(isRaining) {
    console.log("Is raining");
}else{
    console.log("Is not raining");
}

///////////////////////////

let urName = prompt('Enter ur name');
alert(`Hello ${urName}`);

/////////////////////////////

let ques = confirm('Вы хотите покинуть текущую страницу?');

if(ques) {
    alert('Вы покидаете страницу');
}else{
    alert('Вы остаетесь на странице');
}

///////////////////////////

let number1 = prompt('Enter number 1');
let number2 = prompt('Enter number 2');

let sum = +number1 + +number2; 

alert(`Sum of number1 and number2 ${sum}`);

///////////////////////////

let ques2 = confirm('Хотите купить продукт X за 100 рублей?');

if(ques2) {
    alert('Вы совершили покупку');
}else{
    alert('Покупка отменена');
}

/////////////////////////////

let color = prompt('Какой цвет нравится?');
alert(`Ваш любимый цвет: ${color}`);

//////////////////////////////

let userNumber = prompt('Угадайте число: от 1 до 10');
let randomNumber = Math.floor(Math.random() * 10) +1;

if(userNumber === number) {
    alert('Вы отменили игру.');
}else{
    userNumber = parseInt(userNumber);

    if(userNumber === randomNumber) {
        alert('Вы угадали число!');
    }else{
        alert(`Неправильно. Правильное число было ${randomNumber}.`);
    }
}

////////////////////////////

let ques3 = confirm('Оцените наш сайт:');

if(ques3) {
    alert('Спасибо за вашу оценку!');
}else{
    alert('Пожалуйста, оставьте нам отзыв с вашими комментариями.');
}


