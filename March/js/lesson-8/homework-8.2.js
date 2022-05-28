
//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// const classMainHeader = document.getElementById(`main_header`).className = `header`;

//b) робить шириниу елементу ul 400px

// const widthUl = document.getElementsByTagName(`ul`);
// for (let i = 0; i < widthUl.length; i++) {
//     const widthUlElement = widthUl[i];
//     widthUlElement.style.width = `400px`
// }

//c) робить шириниу всіх елементів з класом linkList шириною 50%

// const widthLinkList = document.getElementsByClassName(`linkList`)
// for (let i = 0; i < widthLinkList.length; i++) {
//     const widthLinkListElement = widthLinkList[i];
//     widthLinkListElement.style.width = `50%`
//
// }

//d) отримує текст який зберігається в елементі з класом listElement2

// const txtListElement2 = document.querySelector(`.listElement2`).innerText
// console.log(txtListElement2);

//e) отримує всі елементи li та змінює ім колір фону на сірий

// const backgroundGreyLi = document.querySelectorAll(`li`);
// for (let i = 0; i < backgroundGreyLi.length; i++) {
//     const backgroundGreyLiElement = backgroundGreyLi[i];
//     backgroundGreyLiElement.style.background = `grey`;
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// const classA = document.querySelectorAll(`a`);
// for (let i = 0; i < classA.length; i++) {
//     const classAElement = classA[i];
//     classAElement.className = `anchor`
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// const changeTxt = document.getElementsByTagName(`a`);
// for (let i = 0; i < changeTxt.length; i++) {
//     const changeTxtElement = changeTxt[i];
//     if (changeTxtElement.textContent === `link3`){
//         changeTxtElement.style.fontSize = `40px`
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// const classA = document.getElementsByTagName(`a`);
// for (let i = 0; i < classA.length; i++) {
//     const classAElement = classA[i];
//     classAElement.className = (`element_` + document.querySelector(`a`).innerHTML)
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// const backgroundSub = document.getElementsByClassName(`sub-header`);
// let h = prompt(`Введіть колір фону`);
// for (const backgroundSubElement of backgroundSub) {
//     backgroundSubElement.style.backgroundColor = h;
// }

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()


// const txtColorSub = document.getElementsByClassName(`sub-header`)
// for (let i = 0; i < txtColorSub.length; i++) {
//     const txtColorSubElement = txtColorSub[i];
//     if (txtColorSubElement.textContent === `content 2 segment`){
//         txtColorSubElement.style.color = prompt(`t`)
//     }
// }

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let b = prompt(`text`);
// const changeText = document.querySelector(`.content_2`).innerHTML = b;

//l) отримати елементи p та змінити їм padding на 20px

// const changePadding = document.querySelectorAll(`p`);
// for (let i = 0; i < changePadding.length; i++) {
//     const changePaddingElement = changePadding[i];
//     changePaddingElement.style.padding = `20px`
// }

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// const changeName = document.querySelectorAll(`.text2`)
// for (let i = 0; i < changeName.length; i++) {
//     const changeNameElement = changeName[i];
//     changeNameElement.innerHTML = `march - 2022`;
// }