//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника

let rectangle = (a, b) => {
    return a * b;
}
console.log(rectangle(10, 5));
document.write(`<h4>Площа прямокутника: ${rectangle(10, 5)}</h4>`);

// - створити функцію яка обчислює та повертає площу кола

let roundS = (r) => {
    return (3.14 * (r*r))
}
document.write(`<h4>Площа кола: ${roundS(5)}</h4>`);

// - створити функцію яка обчислює та повертає площу циліндру

let cylinder = (h,r) => {
    return ((3.14*2)*(r*r)+2*3.14*r*h)
}
document.write(`<h4>Площа циліндру: ${cylinder(5, 3)}</h4>`);

// - створити функцію яка приймає масив та виводить кожен його елемент

let names = [`katya`, `olya`,`sasha`, `dima`, `lesha`,`vlad`];
let list = (names) => {
    for (let i = 0; i < names.length; i++) {
        document.write(`<div>${names[i]}</div>`)

    }
}
list(names);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let par = (txt) =>{
    document.write(`<p>${txt}</p>`)

}
par('скоро весна ;)');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list2 = (...txt) => {
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`);
}
list2(`Homework`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulCreator = (arg, numLi) => {
    for (let i = 0; i < numLi; i++) {
        document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`);
}
}
ulCreator(`Всім Привіт !!!`, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [false, true, 'summer', 'fall', 156, 284, 897];

let arrayList = (line) => {
    for (let i = 0; i < line.length; i++) {
        document.write(`<ul>`);
        document.write(`<li>${line[i]}</li>`);
        document.write(`</ul>`);
    }
}
arrayList(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
];

let list3 = (user) => {
    for (let element of user) {
        document.write(`<div>name: ${element.name}, age: ${element.age}, id: ${element.id}</div>`)
    }
}
list3(users)
