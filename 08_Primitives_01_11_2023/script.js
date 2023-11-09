let x;
console.log(x); //undefind - нет инициализации

x = 7;
console.log(x); //number

x = "bye";
console.log(x); //String

let y = x;
console.log(y);

console.log("Hello " + y);

let a = 5;
console.log("Number: " + a);

//What is the different???????????????/
const pi = 3.1415926;
console.log("pi= " + pi);
console.log(`pi = ${pi}`);

const exp = pi;
console.log("exp = " + exp + " or " + pi);
console.log(`exp = ${exp} or ${pi}`);

//boolean
x = true;
console.log(x);

//Empty object
x = null;

//concatenation

//concatenation
let b = "5";
console.log(b + 5); // will show 55

let res = `true` + 5;
console.log(res); //true5

//неявное переобразование типов данных

//1
//boolean true преобразуется в 1
res = true + 5;
console.log(res);
//boolean  false преобразуется в 0
res = false + 5;
console.log(res);

//2
//перевести в строку
res = 5;
console.log(res); //number
console.log(res + ""); //string

//3 перевести в число

res = "5";
console.log(res); //string
console.log(+res); // number

res = "5a";
console.log(+res); //NaN (not a number)

//4 typeof  для вычисления типа данных
console.log(typeof res); //string
console.log(typeof +res); //number

// = == ===

//нестрогое сравнение (сравниваются значения без учёта типа данных)
x = "2" == 2;
console.log(x);

//Cтрогое сравнение (сравниваются значения с учётом типа данных)
x = "2" === 2;
console.log(x);

res = 7 % 2;
console.log(res);

//////////////

switch (res) {
  case 1:
    console.log(`number: ${res}`);
    break;

  case "1":
    console.log(`string: ${res}`);
    break;

  default:
    console.log("It's not a 1");
    break;
}

let age = 16;
let vol = age > 16 ? 42 : 1.5;
console.log(vol);

x = 10;
res = x++ + ++x; //x++ = 11; ++xx = 12 (11+1) and res = 22
console.log(res);

x = 10;
res = x++ + x++; //x++ = 11;xx++ = 11  and res = 21
console.log(res);

// false = 0, '', null, NaN, undefined
x = !!x; //Boolean(x); not usable
console.log(x);

//HomeWork

// res = 10; вернуть сумму числа

result = sumDigits(1234);

function sumDigits(number) {
  let convertToString = number + "";
  let sum = 0;

  for (let i = 0; i < convertToString.length; i++) {
    sum += parseInt(convertToString[i]);
  }
  return sum;
}
console.log("Sum: " + result);

// сравнить сумму цифр первой половины числа со второй если одинаковые true если нет false

res = luckyNumber(123871);

function luckyNumber(number) {
  let convertToString = number + "";
  let length = convertToString.length;

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < length / 2; i++) {
    sum1 += parseInt(convertToString[i]);
  }

  for (let i = length / 2; i < length; i++) {
    sum2 += parseInt(convertToString[i]);
  }

  return sum1 === sum2;
}

console.log(res ? "Lucky" : "Unlucky");

///Используя эти 2 переменные вывести слово банана

function banana() {
  let a = "a";
  let b = "b";

  //var1
  let result = b + a + "n" + a + "n" + a;
  console.log(result);

  // var2
  let result2 = `${b}${a}n${a}n${a}`;
  console.log(result2);
}

banana();
