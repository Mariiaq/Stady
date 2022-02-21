
//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let clearN1 = n1.replaceAll('.',' ').replace(' ', '');
console.log(clearN1);
let n2 = 'Ron---Whisley'
let clearN2 = n2.replaceAll('-', ' ').replace(' ', '').replace(' ', '')
console.log(clearN2);
let n3 = 'Hermione__Granger';
let clearN3 = n3.replaceAll('_',' ').replace(' ', '');
console.log(clearN3);

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arrayRandom = (array) => {
    let arr = [];
    for (let i = 0; i < array; i++) {
        arr.push(Math.round(Math.random()*100));

    }
    return arr;
}

document.write(arrayRandom(20));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let numbers = arrayRandom(30);
console.log(numbers.sort((a, b) => a - b ));
console.log(numbers.sort((a , b) => b - a ));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let numbers2 = arrayRandom(30);
let filterRandom = numbers2.filter((number )=> {
return number % 2 === 0;
});
console.log(filterRandom);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arrayNum, direction) => {
    if (direction === 'ascending') {
        console.log(arrayNum.sort((a,b) => a-b));
    }else if(direction === 'descending'){
        console.log(arrayNum.sort((a,b)=>b-a));
    }
}

sortNums(arrayRandom(20), 'ascending');

//- є масив
//  -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((h, d) => d.monthDuration - h.monthDuration));


//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(cam => coursesAndDurationArray.monthDuration > 5));

let new3 = coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
});
console.log(new3);
