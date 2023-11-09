
let arr = ['one', 'two', 'three', 'five', 'thrEE', 'THree', 'six'];

console.log('====== indexOf ======');
let res = arr.indexOf('thrEE');//search element

console.log(arr); //print array
console.log(res);//index of elem or -1 if not exist

///////////////////////////////////

console.log('====== includes ======');
 res = arr.includes('nine');//search element

console.log(arr); //print array
console.log(res);//true or false

///////////////////////////////////
console.log('====== findIndex ======');
 
res = arr.findIndex(predicateLength3);//search element

function predicateLength3 (element, index) {

 return element.length == 3 && index >= 2;
}

console.log(res);

//or
let arr2 = ['one', 'two', 'three', 'five', 'thrEE', 'THree', 'six'];
res = arr2.findIndex(predicateLength);

function predicateLength (_, index) {

    return index >= 5;
   }
   
   console.log(res);

///////////////////////

