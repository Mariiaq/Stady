
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a,b){
    return a*b;
}
console.log(rectangle (10, 15));

//створити функцію яка обчислює та повертає площу кола з радіусом r

function roundS(r){
    return (3.14 * (r*r))
}
console.log(roundS(6));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(h,r){
    return ((3.14*2)*(r*r)+2*3.14*r*h)
}
console.log(cylinder(100, 24))

//створити функцію яка приймає масив та виводить кожен його елемент

let fameli = [`mother`, `father`,`sister`, `brother`, `wife`,`husband`];
function list(fameli){
    for (let i = 0; i < fameli.length; i++) {
        document.write(`<div>${fameli[i]}</div>`)

    }
}
list(fameli);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function par(...asd) {
    document.write(`<p>${asd}</p>`)
}
par(`Параграф с текстом`);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list2(...txt){
    document.write(`<ul>`);
        document.write(`<li>${txt}</li>`);
        document.write(`<li>${txt}</li>`);
        document.write(`<li>${txt}</li>`);
        document.write(`</ul>`);
}
list2(`Hello people!`);


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function liCreator (text, liNum) {
for (let i = 0; i < liNum; i++) {

   document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
document.write(`</ul>`);
}
}
liCreator(`hello world`, 8);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [false, true, 'summer', 'fall', 156, 284, 897];

function arrayList (line) {
    for (let i = 0; i < line.length; i++) {
        document.write(`<ul>`);
        document.write(`<li>${line[i]}</li>`);
        document.write(`</ul>`);
    }
}
arrayList(array);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
];

function list3(user){
    for (let element of user) {
        document.write(`<div>name: ${element.name}, age: ${element.age}, id: ${element.id}</div>`)
    }
}
list3(users)
