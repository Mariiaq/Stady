
//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const blok = document.createElement(`div`)
// blok.setAttribute(`class`, ` wrap collapse alpha beta`);
// blok.style.height = `150px`;
// blok.style.width = `150px`;
// blok.style.margin = `10px`;
// blok.style.backgroundColor = `pink`;
// blok.style.font = `red`;
// blok.style.fontSize = `15px`;
// document.body.append(blok);
// const blok2 = blok.cloneNode(blok);
// document.body.appendChild(blok2);

//- Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// const arr = ['Main','Products','About us','Contacts'];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     const li = document.createElement(`li`);
//     li.innerHTML = arrElement;
//     const ulMenu = document.getElementsByClassName(`menu`)[0];
//     ulMenu.appendChild(li)
// }

//- Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const title = document.createElement(`div`);
//     title.innerHTML = coursesAndDurationArrayElement.title;
//     const monthDuration = document.createElement(`div`);
//         monthDuration.innerHTML = coursesAndDurationArrayElement.monthDuration;
//
// document.body.append(title, monthDuration)
// }

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const divItem = document.createElement(`div`)
//     divItem.className = `item`
//     const h1Heading = document.createElement(`h1`);
//     h1Heading.className = `heading`;
//     h1Heading.innerHTML = coursesAndDurationArrayElement.title;
//     const pDescription = document.createElement(`p`);
//     pDescription.className = `description`;
//     pDescription.innerHTML = coursesAndDurationArrayElement.monthDuration;
//     divItem.append(h1Heading, pDescription);
//     document.body.appendChild(divItem);
//
// }