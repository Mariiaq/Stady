//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let f = 1;
let g = 10;
let e = -999;
let h = 123;
let o = 3.14;
let p = 2.7;
let n = 16;
let m = true;
let k = false;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(f);
console.log(g);
console.log(e);
console.log(h);
console.log(o);
console.log(p);
console.log(n);
console.log(m);
console.log(k);
alert(a);
alert(b);
alert(c);
alert(d);
alert(f);
alert(g);
alert(e);
alert(h);
alert(o);
alert(p);
alert(n);
alert(m);
alert(k);
document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(f);
document.write(g);
document.write(e);
document.write(h);
document.write(o);
document.write(p);
document.write(n);
document.write(m);
document.write(k);

//- Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

let book = {
    name: 'Big book',
    pages: 324,
    ganr: 'fantasi'
}
console.log(book);

//- Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

let book2 = {
    name: 'Small book',
    pages: 152,
    ganr: 'fantasi',
    authors: ['vasya','katya', 'lena']
}
console.log(book2);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Branashko'
let middleName = 'Mariia'
let lastName = 'Vladislavivna'
let person = firstName + ' ' + middleName + ' ' + lastName
console.log(person);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let a = prompt('Введіть Ваше ім`я');
let b = prompt('Введіть Ваше по-юатькові');
let c = prompt('Введіть Ваш вік');
console.log('Вітаю це' + ': ' + a + ' ' + b + ' ' + 'віком: '+ c + 'років');

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b);
console.log(typeof c);

//- Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let arreyBooks = [{
    name: 'Small book',
    pages: 158,
    ganr: 'fantasi',
    authors: ['vasya','katya', 'lena']},
    {
        name: 'Small book',
        pages: 24,
        ganr: 'fantasi',
        authors: ['vasya','katya', 'lena']},
    {
        name: 'Small book',
        pages: 365,
        ganr: 'fantasi',
        authors: ['vasya','katya', 'lena']},
    {
        name: 'Small book',
        pages: 528,
        ganr: 'fantasi',
        authors: ['vasya','katya', 'lena']},
    {
        name: 'Small book',
        pages: 169,
        ganr: 'fantasi',
        authors: ['vasya','katya', 'lena']}
]

console.log(arreyBooks[0]);
console.log(arreyBooks[1]);
console.log(arreyBooks[2]);
console.log(arreyBooks[3]);
console.log(arreyBooks[4]);