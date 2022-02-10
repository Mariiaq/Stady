// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [115, 45, 894, 932, 361];

let strs = [`str1`,`str2`,`str3`, `str4`, `str5`];

let bool = [true, false, 545, 10500, 1824];
console.log(numbers);
console.log(strs);
console.log(bool);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let m = [];
m[0] = 'Вітаю';
m[1] = 'согодні'
    m[2] = 'чудовий'
    m[3] = 'день';
console.log(m);
document.write(m);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Довільний текст</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} Довільний текст :)</div>`)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a = 0;
while (a < 20){

    document.write(`<div><h1>Довільний текст 3</h1></div>`);
    a++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let a = 0;
while (a < 20) {
    document.write(`<div><h1>${a}Це знов довільний текст</h1></div>`);
    a++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let number = [341, 342, 343, 344, 345, 346, 347, 348, 349, 340];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let month = [`Agust`, `September`, `November`, `December`, `January`, `February`, `March`, `April`];
for (let i = 0; i < month.length; i++) {
  console.log(month[i]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let over = [true, false, `boll`, `snow`, `wrist`, 0, 147, 18, 269, 50189];
let i = 0;
while (i<over.length) {
console.log(over[i]);
i++;
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let bool = [true, false, `summer`, `sun`, `wrist`, 0, 147, {}, 269, []];
for (let i = 0; i < bool.length; i++) {
 if (typeof bool[i] === "boolean") {
     console.log(bool[i]);
 }
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let num = [true, false, `summer`, `sun`, `wrist`, 0, 147, {}, 269, []];
for (let i = 0; i < num.length; i++) {
   if (typeof num[i] === "number"){
       console.log(num[i]);
   }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let str = [true, false, `summer`, `sun`, `wrist`, 0, 147, {}, 269, []];
for (let i = 0; i < str.length; i++) {
   if (typeof str[i] === "string"){
       console.log(str[i]);
   }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr = [];
arr [0] = `Завтра`;
arr [1] = `у`;
arr [2] = `нас`;
arr [3] = `заняття`;
arr [4] = `о`;
arr [5] = 20;
arr [6] = `і`;
arr [7] = `це`;
arr [8] = `-`;
arr [9] = true;

let i =0;
while (i<arr.length) {
console.log(arr[i]);
i++;
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(`крок : ${i}`);
    document.write(`крок : ${i} `);
}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(`Поточний номер кроку: ${i}`);
document.write(`<div> Поточний номер кроку: ${i}</div>`);
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    i = i+1;
   console.log(`Поточний номер кроку: ${i}`);
    document.write(`<div> Поточний номер кроку: ${i}</div>`);
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
   if (i%2 ===0) {
       console.log(`Поточний номер кроку : ${i} `)
       document.write(`<div> Поточний номер кроку: ${i}</div>`);
   }
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
   if (i%2 !==0) {
       console.log(`Поточний номер кроку : ${i} `)
       document.write(`<div> Поточний номер кроку: ${i}</div>`);
   }
}
