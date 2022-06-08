
//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const element = document.createElement(`div`);
// element.setAttribute(`id`, `text`);
// element.style.width = `250px`;
// element.style.height = `250px`;
// element.style.background = `green`;
// document.body.appendChild(element)
// const button = document.createElement(`button`);
// button.style.width = `150px`;
// button.style.height = `50px`;
// button.style.margin = `15px`;
// button.innerText = `click me`;
// document.body.appendChild(button);
//
// button.onclick = function (){
//     element.style.display = `none`;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const input = document.createElement(`input`);
// input.type = `numbers`;
// const button = document.createElement(`button`);
// button.innerText = `click`;
// document.body.append(input, button);
// button.addEventListener(`click`, function (){
//     if(input.value >= 18){
//         alert(`Вітаю, ти старший за 18 років`);
//     }
//     else if(input.value < 18){
//         alert('Вітаю, але ті ще занадто молодий');
//     }
//     input.value = ``;
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const formOne = document.createElement(`form`);
// formOne.name = `formOne`;
// const inputOne = document.createElement(`input`);
// inputOne.type = `text`;
// inputOne.name = `inputOne`;
// const inputTwo = document.createElement(`input`);
// inputTwo.type = `text`;
// inputTwo.name = `inputOne`;
// const formTwo = document.createElement(`form`);
// formTwo.name = `formTwo`;
// const inputTree = document.createElement(`input`);
// inputTree.type = `text`;
// inputTree.name = `inputOne`;
// const inputFour = document.createElement(`input`);
// inputFour.type = `text`;
// inputFour.name = `inputOne`;
// const button = document.createElement(`button`);
// button.innerText = `Save`;
//
// button.addEventListener(`click`, function (){
//     console.log(inputOne.value);
//     console.log(inputTwo.value);
//     console.log(inputTree.value);
//     console.log(inputFour.value);
// });
//
// formOne.append(inputOne, inputTwo);
// formTwo.append(inputTree, inputFour);
// document.body.append(formOne, formTwo, button);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const inputOne = document.createElement(`input`);
// const inputTwo = document.createElement(`input`);
// const inputTree = document.createElement(`input`);
// const button = document.createElement(`button`);
// button.innerText = `ok`;
// document.body.append(inputOne, inputTwo, inputTree, button);