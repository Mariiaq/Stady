// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = prompt('Введіть перше число');
let b = prompt('Введіть друге число');
if (a > b) {
    let result = confirm('Вітаю, число ' + a + ' більше !');
    console.log(result);
} else if (a < b)
{
    let result = confirm('Вітаю, число ' + b + ' більше !');
    console.log(result);
}
else if (a === b)
{
    let result = confirm('Вітаю, ви ввели два однакових числа !');
    console.log(result);
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let flat = prompt('Введіть номер Вашої квартири');
if (flat>1 && flat< 20+1){
    confirm('Тепер я знаю що ви живете в першому будинку');
}
else if (flat>20 && flat< 48+1){
    confirm('Тепер я знаю що ви живете в другому будинку');
}
else if (flat>48 && flat< 90+1){
    confirm('Тепер я знаю що ви живете в третьому будинку');
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let n = prompt('Введіть число');
if (n === '10') {
    confirm('Вірно!');
}
else {
    confirm('Невірно!');
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temp = prompt('Якщо не хочеш йти сьогодні в OKTEN, введи температуру повтря, можливо я допоможу ))');
if (temp> +10 && temp< +22){
   confirm('Вітаю, ти програв, біжи на навчання!');
}
else {
    confirm('Вітаю, ти виграв, біжи на навчатися онлайн!');
}

//- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let num = prompt('Введіть число');
switch (num) {
    case '1':
        confirm('Ви виграли Авто!!!');
        break;
    case '2':
        confirm('Ви виграли Мотоцикл!!!');
        break;
    case '3':
        confirm('Ви виграли Квартиру!!!');
        break;
    case '4':
       confirm('Ви виграли Велосипед!!!');
        break;
    case '5':
       confirm('Ви виграли Телефон!!!');
        break;
    default :
        confirm('Можливо пощастить наступного разу')
}