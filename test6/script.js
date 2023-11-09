

let styles = ['Jazz', 'Blues'];
console.log(styles);
 
styles.push('Rock-n-roll'); //add last
console.log(styles);

styles[1] = 'Classic'; //add instead of...
console.log(styles);

console.log(styles.shift()); //delete first

styles.unshift('Rap', 'Reggi'); //add first
console.log(styles);

styles.pop(); ////delete last
console.log(styles); 

///////////////////////////////////////



// function sumInput() {
    
//     let arr = [];
//     let input;

//     do {
//         input = prompt('Enter number');

//         if(input === null || input === '' || !isFinite(input)) {
//             break;
//         }
//         arr.push(+input);

//     }while(true);

//     let sum = 0;
//     for (let numb of arr) {
//         sum +=numb;
//     }

//     return sum;
// }

// console.log(sumInput());


/////////////////////////

let arr = [4,5,6,3,1];

arr.forEach(function(element) {

    console.log(element);

});

/////////////////////////

let arrStr = ['apple', 'kiwi', 'banana', 'orange'];
let resultArr = [];

arrStr.forEach(function(elem) {

    res = elem.toUpperCase();
    resultArr.push(res);
});

console.log(resultArr);

///////////////////////////

const array = [1, 2, 3, 4, 5];

array.forEach( function(el) {

    console.log(el);
});

////////////////////////////////

let resultArr2 = [];
array.forEach( function(elem) {

    elem = elem * 2;
    resultArr2.push(elem);
});

console.log(resultArr2);

/////////////////////////////////

let sum = 0;
array.forEach(function(elem) {

    sum += elem;
    
});

console.log(sum);

///////////////////////////////////

let counter = 0;
let array5 = [10, 11, 15, 12, 8, 4, 17];

array5.forEach( function(elem){

    if(elem % 2 === 0) {
        counter++;
    }

});

console.log(counter);

///////////////////////////////////////

const arr7 = [10, 5, 8, 15, 3];
let max = arr[0];

arr7.forEach(function(elem) {

    if(elem >max) {
        max = elem;
    }
});

console.log(max);

//////////////////////////////////
console.log('');

let ar1 = [1,2,3,4];
let ar2 = [5,6,7,8];

console.log( ar1.concat(ar2));

console.log('');

/////////////////////////////////

let strArr = ['Hello world', 'This is a test', 'Splitting strings'];

let ress = [];

strArr.forEach(function(str) {

    let word = str.split(' ');
    ress = ress.concat(word);

});

console.log(ress);

///////////////////////////////////

let array10 = [2,4,50,5,9];

array10.splice(2,1,5);
console.log(array10);

//////////////////////////////////

console.log(array10.indexOf(9));

/////////////////////////////////

console.log(array10.lastIndexOf(9));

////////////////////////////////////

console.log(array10.includes(5));

///////////////////////////////////


let index = array10.findIndex(function (elem) {
    return elem % 5 === 0;
});

console.log(index);

let index2 = array10.findLastIndex(function (elem) {
    return elem % 5 === 0;
});

console.log(index2);

//////////////////////////////

let array1 = [5, 7, 10, 12, 8];
let array1Res = array1.map((elem) => elem *2);
console.log(array1Res);

////////////////////////////////

let strAr = ['apple', 'banana', 'kiwi'];

let strArRes = strAr.map((str) => str.toUpperCase() );
console.log(strArRes);

///////////////////////////////


let arrNum = [5,7,10,12,3,6,20];

arrNum.sort(function(a,b) {
    return a -b;
});


console.log(arrNum);

///////////////////////////

let arStr = ['kiwi', 'banana', 'apple'];

arStr.sort(function(a,b) {

    return a.localeCompare(b);
});

console.log(arStr);

/////////////////////////////

arrNum.reverse();
console.log(arrNum);

//////////////////////////////

let st = 'Hello world Hi Valentina Java Script';

console.log(st.split(' '));

///////////////////////////////////////

let ar = ['Hello world', 'Hi Valentina', 'Java Script'];

console.log(ar.join(', '));

///////////////////////////

let num = [5, 2, 4, 10];
let sum3 = num.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum3);
