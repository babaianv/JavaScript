

function ucFirst(str) {
    
   return str[0].toUpperCase() +str.slice(1);
}
console.log(ucFirst('valea'));

/////////////////////////////

function checkSpam(str) {
    
    str = str.toLowerCase();

    if(str.includes('viagra') || str.includes('xxx')){
        return true;
    }else{
        return false;
    }

}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

///////////////////////////////////////

let price = '$120';

function extractCurrencyValue (str) {

    let ex = parseInt(str.slice(1));
    return ex;
}
console.log(extractCurrencyValue(price));

////////////////////////////////////////////////

let string = 'Valentyna Babaian Stepanovna';

function findQuanOfWords(string) {

    return string.split(/[\s\.\?]+/).length;
}

console.log(findQuanOfWords(string));

///////////////////////////////////////

let str = 'Valea';

function check (str) {

    str = str.toLowerCase();
    return str.startsWith('v');

}

console.log(check(str));

//////////////////////////////////

function repl (str) {

    return str.replace(/ /g, '-');
}

console.log(repl(string));

////////////////////////////////

let str2 = 'valea';

function toUp (str2) {

    return str2[0].toUpperCase() + str2.slice(1);

}

console.log(toUp(str2));

/////////////////////////////////
let phoneNumber = '+1 (123) 456-7890';
let numericPhoneNumber = phoneNumber.replace(/\D/g, '');
console.log(numericPhoneNumber);

///////////////////////////////////

let num = 2.45;

let result = Math.round(num);
console.log(result);

//////////////////////////


let num2 = '5.73';
let result2 = parseFloat(num2);
console.log(result2);

//////////////////////////

let num3 = 'mom';
let result3 = isNaN(num3);
console.log(result3);

////////////////////////////////
let num4 = 2/0;
let result4 = isFinite(num4);
console.log(result4);

/////////////////////////////////

let k = true;
let res = k.toString();
console.log(res);

////////////////////////////////////
let d = 0;
let res1 = Boolean(d);
console.log(res1);

///////////////////////////

let c = 5;
let res2 = Boolean(c);
console.log(res2);