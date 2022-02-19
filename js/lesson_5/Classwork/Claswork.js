//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a, b, c) => {
    if (a<b && a<c) {
        console.log(a);
        document.write(a + ` `);
    }
    else if (a>b && b<c){
        console.log(b);
        document.write(b + ` `);
    }
    else if (a>c && b>c){
        console.log(c);
        document.write(c + ` `);
    }
}

min(15, 48, 34);
min(69, 12, 55);
min(118, 528, 16);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let max = (a, b, c) =>{
    if (a>b && a>c){
        console.log(a)
        document.write(a + ` `)
    }
    else if (a<b && b>c){
        console.log(b)
        document.write(b + ` `)
    }
    else if (a<c && b<c){
        console.log(c)
        document.write(c + ` `)
    }
}
max(74, 135, 958);
max(143, 1, 50);
max(56, 1258, 4);

//- створити функцію яка повертає найбільше число з масиву

let maxNum = (numbers) =>{
    max = [0];
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

maxNum([150, 695, 2548, 324, 9541, 75, 9541, 2147, 456, 3]);
console.log(max)
document.write(`<h3>Найбільше число з масиву: ${max}</h3>`);

//- створити функцію яка повертає найменьше число з масиву

let minNum = (numbers) => {
    min = numbers[0];
    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

minNum([150, 695, 2548, 324, 9541, 75, 9541, 2147, 456, 3]);
console.log(min)
document.write(`<h3>Найменше число з масиву: ${min}</h3>`);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


let summaA = (array) => {
    let summa = 0;
    for (let num of array) {
        summa = summa + num;
    }
    return summa
}
console.log(summaA([9652, 365, 852, 654, 14, 65, 456, 853]));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let calc = (array) => {
    i = 0;
    for (let num of array) {
        i = num + i;
        result = i / array.length;
    }
    return result;
}
console.log(calc([5, 10, 10, 5,10]));
document.write(`<h3>Середнє арифметичне число архіву: ${result}</h3>`);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (...arg) => {

    let min = arg[0];
    let max = arg[0];
    for (const num of arg){
        if (num < min) {
        min = num;
    }
    else (num > max)
        max = num;
    }
    console.log(max);
    return min;

}
minMax(10, 5, 897, 15879, 164, 646, 279);

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arrayRandom = (array) => {
    let h = [];
    for (let i = 0; i < array; i++) {
        h.push(Math.round(Math.random()*100));

    }
    return h;
}
document.write(arrayRandom(15));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrayRandomLimit = (array, limit) => {
    let h = [];
    for (let i = 0; i < array; i++) {
        h.push(Math.round(Math.random()*limit));

    }
    return h;
}
document.write(arrayRandomLimit(18, 25));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let revers = (arrayNum) => {
    let newRevers = [];
    for (let i = arrayNum.length, ri = 0; i > 0; i--, ri++) {
        newRevers[ri] = arrayNum[i]
    }
return newRevers
}
console.log(revers([1,2,3,4,5]));