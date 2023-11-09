console.log('Hello world!');
console.log(5 + 4);
console.log('9');

// однострочный комментарий
/* 
    однострочный комментарий
*/

console.log(document.body);

/*
        Ключевые слова для создания переменных
        Блочная область видимости:
    1. const - константа (не может быть переопределена)
    2. let - переменная (может быть переопределена)
    
        Глобальная область видимости:
    3. var (deprecated, устарело)
*/

let a = 10;
let b = '20';//string
console.log(a);
console.log(b);

a = '15';
console.log(a)

// const b = 10;
// console.log(b);

// b = 5; нельзя переопределять константу 
// console.log(b);

const div1Name = document.getElementById('div1');
div1Name.style.border = '1px solid black';
console.log(div1Name.style.border); //значение свойства border
console.log(div1Name);


const div1Query = document.querySelector('#div1');
console.log(div1Query);

const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1);

//изменить значение(текст из html)
for (let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerHTML = `<span>new text ${i + 1}</span>`; // "<span>new text " + i + " </span>"
}

//изменить цвет текста из html
const children = div1Name.children;
console.log(children.length);

for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';    
};

//создать новый параграф
const newP = document.createElement('p');
console.log(newP);

//создаем текст
const newPText = document.createTextNode('This text was created by special method');
//добавляем текст в созданный параграф
newP.appendChild(newPText);

//добавляем созданный параграф в переменную 
div1Name.appendChild(newP); // insertBefore() - в начало



//  HomeWork

const t = setInterval(move, 20); //выполняется каждые 20 миллисекунд
let pos = 0; //Эта переменная будет отслеживать текущую позицию "box".

/*
для управления направлением движения "box". Изначально 
установлена в 1, что означает движение вниз и вправо.
*/
let direction = 1; 

//Эта строка выбирает элемент с идентификатором "box" и сохраняет его в переменной box. 
const box = document.getElementById('box');

//method
function move() {
    /*
    проверяется текущее положение "box". Если pos достигает 150
     пикселей или 0 пикселей, направление изменяется 
     (от "вниз и вправо" к "вверх и влево" и наоборот).
    */
    if (pos == 150) {

        /*
        Если pos достигает 150 пикселей, направление меняется 
        на -1, что означает движение вверх и влево.
        */
        direction = -1;

    }else if (pos <= 0) {

         /*
       Если pos меньше или равно 0, направление меняется на 1,
        возвращая движение вниз и вправо.
        */
        direction =1;
    }

    pos += direction;//Обновляет pos в соответствии с текущим направлением.
   
    //Эта строка изменяет вертикальное положение элемента "box"
    box.style.top = pos + 'px';
    //Эта строка изменяет горизонтальное положение элемента "box".
    box.style.left = pos + 'px';
}

