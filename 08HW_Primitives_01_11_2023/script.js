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
