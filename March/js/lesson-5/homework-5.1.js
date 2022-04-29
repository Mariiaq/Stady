
//Все стірлочними!!!!!!!!!
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let calc = (array) => {
//     i = 0;
//     for (let num of array) {
//         i = num + i;
//         result = i / array.length;
//     }
//     return result;
// }
// console.log(calc([5, 11, 24, 5,10]));
// document.write(`<h3>Середнє арифметичне число масиву: ${result}</h3>`);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...arg) => {
//
//     let min = arg[0];
//     let max = arg[0];
//     for (const num of arg){
//         if (num < min) {
//             min = num;
//         }
//         else (num > max)
//         max = num;
//     }
//     console.log(max);
//     return min;
//
// }
// minMax(103, 569, 897, 15, 164, 649, 279);

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arrayRandom = (array) => {
//     let h = [];
//     for (let i = 0; i < array; i++) {
//         h.push(Math.round(Math.random()*100));
//
//     }
//     return h;
// }
// document.write(arrayRandom(17));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arrayRandomLimit = (array, limit) => {
//     let h = [];
//     for (let i = 0; i < array; i++) {
//         h.push(Math.round(Math.random()*limit));
//
//     }
//     return h;
// }
// document.write(arrayRandomLimit(10, 20));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let revers = (arrayNum) => {
//     let newRevers = [];
//     for (let i = arrayNum.length, ri = 0; i > 0; i--, ri++) {
//         newRevers[ri] = arrayNum[i]
//     }
//     return newRevers
// }
// console.log(revers([1,2,3,4,5]));

//Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let rectangleS = (a, b) => {return a * b};
// console.log(rectangleS(10, 3));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

// let circleS = (r) => {return 3.14 * (r * r)};
// console.log(circleS(5))

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cilinderS = (h, r) => {
//     return 2 * 3.14 * r * h
// }
// console.log(cilinderS(5, 8));

//- створити функцію яка приймає масив та виводить кожен його елемент

// let arr1 = [45, 98, 669, true, 'milk', 'beer']
// let elements = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//     }
// }
// elements(arr1);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let pTxt = (txt) =>{
//     document.write(`<p>${txt}</p>`)
// }
// pTxt('Lorem ipsum dolor sit amet.')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (txt) => {
//     document.write(`<ul>`)
//     document.write(`<li>${txt}</li><li>${txt}</li><li>${txt}</li>`)
//     document.write(`</ul>`)
// }
// list(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores beatae, doloribus ducimus earum fugiat fugit obcaecati repudiandae rerum voluptatibus!`);
//

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (txt, num) =>{
//    document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('Lorem ipsum dolor sit amet.', 6);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [10, false, 'dog', 'cat', true];
// let list3 = (arr3) =>{
//     for (let i = 0; i < arr3.length; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${arr3[i]}</li>`);
//         document.write(`</ul>`)
//     }
// }
// list3(arr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1,name: 'vasya', age: 31},
//     {id: 2,name: 'petya', age: 30},
//     {id: 3,name: 'kolya', age: 29},
//     {id: 4,name: 'olya', age: 28},
//     {id: 5,name: 'max', age: 30},
//     {id: 6,name: 'anya', age: 31},
//     {id: 7,name: 'oleg', age: 28},
//     {id: 8,name: 'andrey', age: 2},
//     {id: 9,name: 'masha', age: 30},
//     {id: 10,name: 'olya', age: 31},
//     {id: 11,name: 'max', age: 31}
// ];
//
// let userList = (arrey) => {
//     for (let arreyElement of arrey) {
//         document.write(`<div>`)
//         document.write(`<h3>ID: ${arreyElement.id}</h3><p>Name: ${arreyElement.name}</p><p>Age: ${arreyElement.age}</p>`);
//     document.write(`</div>`);
//     }
// }
// userList(users);

//- створити функцію яка повертає найменьше число з масиву

// let minNum = (numbers) => {
//     min = numbers[0];
//     for (let num of numbers) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
//
// minNum([150, 695, 2548, 324, 9541, 75, 9541, 2147, 456, 3]);
// console.log(min)

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summaArr = (arrNum) => {
// let summa = 0;
//     for (let num of arrNum) {
//         summa = summa + num;
//     }
//     return summa;
// }
// console.log(summaArr([50, 179, 365, 25, 45, 920, 65468]));

//-створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

