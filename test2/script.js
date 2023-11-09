
let num = 42;
let numAsString = num + '';
console.log(numAsString);

/////////////////////////

let str = "123";
let num2 = +str;
console.log(num2);

/////////////////////

let value = null;
let value2 = !!value;
console.log(value2);

///////////////////

let number = 8;
let text = '10';

let textNum = number + +text;
console.log(textNum);

//////////////////////

let nuM = 7;
let isTrue = true;

let isTrueNum = nuM * isTrue;
console.log(isTrueNum);

////////////////////////

let strNum = "25";
let strNum2 = +strNum;
console.log(strNum2);

let res = strNum2 + 5;
console.log(res);

////////////////////////

// let val = 4;
// let val2 = !!val;

// if (val2) {
//     alert('Значение переменной value преобразовано в true.');
// }else{
//     alert('Значение переменной value преобразовано в false.');
// }

////////////////////////////

let text1 = '42';
let num1 = 10;

let text1Num = num1 + +text1;
console.log(text1Num);

///////////////////////////

let c = 5;
let d = 7;

console.log(`Sum = ${c + d}`);
console.log(`Sum = ${d - c}`);

///////////////////////////////

let x = 5;
let y = 3;

console.log(`Sum = ${x * y }; Sum: ${x / y}`);

////////////////////////////////

let numb = 10;
console.log(`Res = ${numb % 3}`);

/////////////////////////////////

let positiveNum = -10;
console.log(+positiveNum);

////////////////////////////

let counter = 5;
console.log(++counter);

//////////////////////////

let strNumber = "42";
let strNumberN = +strNumber;
console.log(strNumberN);

///////////////////////

let teXt1 = "Valentyna";
let teXt2 = "Babaian";

console.log(`${teXt1} ${teXt2}`);

///////////////////////

let a = 6;
let b = 4;

let res6 = a & b;
console.log(res6.toString(2));

/////////////////////////

let n1 = 3;
let n2 = 2;

let res7 = n1 & n2;
console.log(res7.toString(2));

let res8 = n1 | n2;
console.log(res8.toString(2));

let res9  = n1 ^ n2;
console.log(res9.toString(2));

/////////////////////////////

let k = 4;
let s = 5;

console.log(k > s);
console.log(k < s);
console.log(k === s);
console.log(k != s);

////////////////////////////

let str5 = "Valea";
let str6 = "Valea";

console.log(str5 > str6);
console.log(str5 < str6);
console.log(str5 === str6);
console.log(str5 != str6);

/////////////////////////////

let v = 2;
let stR = "2";

console.log(v == stR);
console.log(v === stR);

//////////////////////////

let val = null;
let m = 5;
let j = "six";

console.log(val == m);
console.log(val === j);

///////////////////////////
console.log("");

let word1 = "Dima";
let word2 = "Valea";

console.log(word1 > word2);
console.log(word1 < word2);
console.log(word1 === word2);
console.log(word1 != word2);

///////////////////////////////

let data = undefined;

if(data === null) {
    console.log("data содержит значение null");
}else if (data === undefined){
    console.log("data содержит значение undefined");
}else{
    console.log("Ваш код сравнения data с другой переменной");
}

