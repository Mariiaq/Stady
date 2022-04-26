//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangleS(a, b) {
//     let s = a * b;
//     return s;
// }
//
// console.log(rectangleS(10, 5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleS(r) {
//     let s = 3.14 * (r * r);
//     return s;
// }
//
// console.log(circleS(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cilinderS(h, r) {
//     let s = 2 * 3.14 * r * h;
//     return s;
// }
//
// console.log(cilinderS(5, 8));

//- створити функцію яка приймає масив та виводить кожен його елемент


// function arrItar(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//
// console.log(arrItar([5, 24, 38, 15, 22]))

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function p(txt) {
//     document.write(`<p>${txt}</p>`)
// }
//
// p('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda exercitationem in inventore ipsum maiores maxime obcaecati perferendis, placeat voluptatibus.');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
//
// list(`Lorem ipsum dolor sit amet.`)

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list2(txt, num){
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list2(`Lorem ipsum dolor.`, 8);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list3(arr2){
//     document.write(`<ul>`)
//     for (let el =0; el < arr2.length; el++){
//         document.write(`<li>${arr2[el]}</li>`)}
//     document.write(`</ul>`)
// }
// list3([true, 15, 895, `city`, `okten`, false]);

