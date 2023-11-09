let arr = [1, 2, 3, "four", "five"];
console.log(arr);
console.log(typeof arr);

//метод меняет исходный массив и возвращает новую длину массива
console.log("========= PUSH========");

let res = arr.push(6, 7, 8);

// распечатывается новый массив
console.log(arr);
// распечатывается новая длина массива0
console.log(res);

// метод меняет исходный массив и удаляет последний элемент, и возвращает удаленный элемент
console.log("========= POP========");

res = arr.pop();
console.log(arr);
console.log(res);

// метод меняет исходный массив и удаляет первый элемент, и возвращает удаленный элемент

console.log("========= Shift ========");

res = arr.shift();
console.log(arr);
console.log(res);

//метод меняет исходный массив и добавляет элементы в начало и возвращает новую длину массива
console.log("========= UnShift ========");

res = arr.unshift(0, 1);
// распечатывается новый массив
console.log(arr);
// распечатывается новая длина массива0
console.log(res);

//Метод канкат НЕ меняет оригинал массива. И возвращает новый обьеденненый массив
console.log("========= Concat ========");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1); //1 2 3
console.log(arr2); // 4 5 6

res = arr1.concat(arr2);

console.log(res); /// 1 2 3 4 5 6

//НЕ меняет оригинал массива и возвращает новый
console.log("========= Slice ========");

res = arr.slice(5, 7);
console.log(arr);
console.log(res);

//Меняет оригинал массива и возвращает новый
console.log("========= Splice ========");

res = arr.splice(1, 4); // с первого элемента до 4х штук вырезать
console.log(arr);
console.log(res);

/////////////////////////

/*Поверх копирование (примитивы храняться в переменных
по ЗНАЧЕНИЮ, а object по ссылке на место в памяти, 
где храняться данные)
 */

let arrCopy = arr1;

console.log(arr1);
console.log(arrCopy);
arr1[0] = 1000;

console.log(arr1);
console.log(arrCopy);

// ...ставиться перед массивом или обьектом (не меняет оригинал)
console.log("========= SPREAD(operator) ========");
// глубокое копирование
let arrTrueCopy = [...arr1];

console.log(arrTrueCopy);
console.log(arr1);
arr1[0] = 1;

console.log(arrTrueCopy);
console.log(arr1);

let obj = {
  userName: "John",
  age: 14,
};

let objCopy = { ...obj };

obj.age = 18;

console.log(obj);
console.log(objCopy);

obj = {
  userName: "John",
  age: 14,
  nationality: "Poland",
  sex: "male",
  dateOfBirth: "31.08.2009",
};

console.log(obj);

objCopy = { ...obj, age: 20, userName: "Peter" };

console.log(objCopy);