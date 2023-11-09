

// let i = 1;
// while(i <=5) {
//     console.log(i);
//     i++;
// }

// console.log("");
/////////////////////////////////

// let con;
// do {
//   con = prompt('Enter password');
// } while(con !== 'пароль123');

//////////////////////////////

// for (let i = 2; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

/////////////////////////////

// let sum = 0;
// let a = 1;
// while(a <=5 ) {
//     sum += a;
//     a++;
// }
// console.log(sum);

//////////////////////////////

// let w;

// do{
//    w =  prompt('Enter number');
// }while(w < 10);


/////////////////////////////////

// let arr = [2, 4, 6, 8, 10];
// let d = 0;

// while(d < arr.length ) {
//     console.log(arr[d]);
//     d++;
// }



///////////////////////////////////

// let pr;

// do {
//     pr = prompt('Enter number from 1 to 5');
// }while(pr < 1 || pr > 5);

//////////////////////////////

function square (number) {
    return  number*number;
    
}
console.log('Result: ' +square(5));

///////////////

function calculateRectangleArea (length, width) {
    return length * width;
}

console.log(calculateRectangleArea(5,6));

///////////////////////////

function isEven (number) {

    if(number % 2 === 0) {
        console.log('Number is even');
    }else{
        console.log('Number is not even');
    }
}

isEven(10);

////////////////////////////

function max (a, b) {

    if(a > b) {
        console.log(a);
    }else{
        console.log(b);
    }
}

max (5, 10);

///////////////////////

let m = function(a, b) {
    return a > b ? a : b;
}

console.log(m(10, 12));

////////////////////////////

let fac = function (n) {

    if (n === 0 || n === 1) {
        return 1;
    }else{
        return n * fac (n -1);
    }
}

console.log(fac(12));

//////////////////////////////////////

let r = (number) => number *number;
console.log(r(5));

/////////////////////////////////////

let ev = (number) => number % 2 === 0;
console.log(ev(11));

/////////////////////////////////////
let mid = (n1, n2) => (n1 +n2) / 2;
console.log(mid(10,30));

//////////////////////////////////

let sayHi = () => 'Hi';
console.log(sayHi());

//////////////////////////////////

let str = (s) => s.toUpperCase();
console.log(str('Valea'));

////////////////////////////////////

let sq = (number) => {
    if (number > 5) {
        return number *number;
    }
};

console.log(sq(6));
console.log(sq(4));
