
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function calc (a, b, c) {
    if (a<b && a<c){
        console.log(a);
    }
    else if (a>b && b<c){
        console.log(b);
    }
    else if (a>c && b>c){
        console.log(c);
    }
}

calc(15, 100, 180);
calc(80, 20, 70);
calc(180, 120, 70);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function calc (a, b, c) {
    if (a>b && a>c){
       console.log(a)
    }
    else if (a<b && b>c){
        console.log(b)
    }
    else if (a<c && b<c){
        console.log(c)
    }
}

calc(150, 10, 18);
calc(80, 120, 70);
calc(180, 120, 270);

//- створити функцію яка повертає найбільше число з масиву

let arrayNumbers = [10,150,285,344,5050,695,100758,36579,14256,258951];
function maxNumber(numbers){
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max){
            max = num;
        }
    }
    return max;
}
maxNumber(arrayNumbers);
document.write(`<div> Найбільше число : ${maxNumber(arrayNumbers)}</div>`);

//- створити функцію яка повертає найменьше число з масиву

let arrayNumbers = [10,150,285,344,5050,695,100758,36579,14256,258951];
function minNumber(numbers){
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min){
            min = num;
        }
    }
    return min;
}
minNumber(arrayNumbers);
document.write(`<div> Найменше число : ${minNumber(arrayNumbers)}</div>`);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function summa(arrayOfNumbers){
let result = 0;
    for (const number of arrayOfNumbers) {
        result = result + number;
    }
return result
}
console.log(summa([150, 15, 85, 997, 10349]))


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

 let arrayNumbers = [10,150,285,344,5050,695,100758,36579,14256,258951];
function minNumber(numbers){
    let min = numbers[0];
    let max = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
        if (
            num > max) {
            max = num;
        }
    }
    console.log (max);
    return min;
}
minNumber(arrayNumbers);
document.write(`<div> Найменше число : ${minNumber(arrayNumbers)}</div>`);

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random(l) {
    let array = [];
    for (let i = 0; i < l; i++) {

        array.push(Math.round(Math.random()*100));
    }
    return array
}

document.write(random(20));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function limRandom (m, l) {
    let arrayLim = [];
    for (let i = 0; i < l; i++) {
        arrayLim.push(Math.round(Math.random()*m));
    }
    return arrayLim
}
document.write(limRandom(20, 15));

