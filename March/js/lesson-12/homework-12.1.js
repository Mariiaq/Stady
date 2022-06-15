
//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// const conteiner = document.createElement(`div`);
// conteiner.className = `conteiner`;
// conteiner.style.width = `1000px`;
// conteiner.style.display = `flex`;
// conteiner.style.flexWrap = `wrap`;
//
// //не выходить стилизовать в CSS(
//
//
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(postList =>{
//         for (const post of postList) {
//             let divPost = document.createElement(`div`);
//             divPost.className = `divPost`;
//             divPost.style.height = `300px`;
//             divPost.style.width = `200px`;
//
//
//             const ulPost = document.createElement(`ul`);
// const liUserId = document.createElement(`li`);
//                 liUserId.innerText = post.userId;
//                 const liId = document.createElement(`li`);
//                 liId.innerText = post.id;
//                 const liTitle = document.createElement(`li`);
//                 liTitle.innerText = post.title;
//                 const liBody = document.createElement(`li`);
//                 liBody.innerText = post.body;
//
//
//                 ulPost.append(liUserId, liId, liTitle, liBody);
//                 divPost.append(ulPost);
//                 conteiner.appendChild(divPost);
//
//         }
//     })
// document.body.appendChild(conteiner);


//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments



// fetch(`https://jsonplaceholder.typicode.com/comments`)
// .then(value => value.json())
// .then(comentesList => {
//     for (const coment of comentesList) {
//         const divComment = document.createElement(`div`);
//         divComment.innerText = coment.name;
//         const elementsComment = document.createElement(`ul`);
//         // const liPostId = document.createElement(`li`);
//         // liPostId.innerText = coment
//         const liId = document.createElement(`li`);
//         liId.innerText = coment.id;
//         const liEmail = document.createElement(`li`);
//         liEmail.innerText = coment.email;
//         const liBody = document.createElement(`li`);
//         liBody.innerText = coment.body
//
//
// elementsComment.append(liId, liEmail, liBody)
// divComment.append(elementsComment);
//         document.body.appendChild(divComment);
//     }});