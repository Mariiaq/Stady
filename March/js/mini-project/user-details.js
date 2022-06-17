//На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

const user = JSON.parse(localStorage.getItem(`clickUser`));
const userDetalies = document.createElement(`div`);
userDetalies.style.width = `860px`;
userDetalies.style.height = `400px`;
userDetalies.style.display = `flex`;
userDetalies.style.flexWrap = `wrap`;
userDetalies.style.alignContent = `space-between`;
userDetalies.style.justifyContent = `space-around`;
userDetalies.style.margin = `0px`;

userDetalies.style.border = `3px solid`
userDetalies.style.borderColor = `violet`;
userDetalies.style.borderRadius = `5px`
userDetalies.style.margin = `5px`;


userDetalies.innerHTML = `Id: ${user.id} <h3>Name: ${user.name}</h3>
<h4>User name: ${user.username}</h4> <h5>email: ${user.email}</h5>
<ul>address: <li>street:${user.address.street}</li> <li>suite:${user.address.suite}</li>
<li>city:${user.address.city}</li> <li>zipcode:${user.address.zipcode}</li></ul>
<ul>Geo:<li>lat:${user.address.geo.lat}</li> <li>lng:${user.address.geo.lng}</li></ul>
<h5>phone: ${user.phone}</h5> <h5> website: ${user.website}</h5>
<ul>company: <li>name:${user.company.name}</li> <li>catchPhrase:${user.company.catchPhrase}</li>
<li>bs:${user.company.bs}</li></ul>`;

document.body.appendChild(userDetalies);

const btnPost = document.createElement(`button`);
btnPost.innerText = `post of current user`;
btnPost.style.width = `90%`;
btnPost.style.marginBottom = `15px`;
userDetalies.append(btnPost);

btnPost.addEventListener(`click`, function () {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(value => value.json())
        .then(posts => {
            const divBoxPost = document.createElement(`div`);
            divBoxPost.style.width = `870px`;
            divBoxPost.style.display = `flex`;
            divBoxPost.style.flexWrap = `wrap`;
            divBoxPost.style.alignItems = `center`;
            divBoxPost.style.justifyContent = `space-between`;

            for (const post of posts) {
                if (user.id === post.userId) {
                    const postDiv = document.createElement(`div`)
                    postDiv.innerHTML = `<h4>${post.title}</h4>`;
                    postDiv.style.width = `150px`;
                    postDiv.style.height = `170px`;
                    postDiv.style.margin = `2px`;
                    postDiv.style.display = `flex`;
                    postDiv.style.flexDirection = `column`;
                    postDiv.style.alignItems = `center`;
                    postDiv.style.justifyContent = `center`;

                    postDiv.style.border = `3px solid`
                    postDiv.style.borderColor = `violet`;
                    postDiv.style.borderRadius = `5px`
                    postDiv.style.margin = `5px`;

                    const btnPostD = document.createElement(`button`);
                    btnPostD.innerHTML = `more about...`;
                    btnPostD.style.width = `100px`;
                    btnPostD.style.height = `30px`;
                    btnPostD.style.marginBottom = `5px`;

                    btnPostD.addEventListener(`click`, function () {
                        localStorage.setItem(`clickPost`, JSON.stringify(post));
                        window.location = `post-detalies.html`;
                    })


                    postDiv.append(btnPostD);
                    divBoxPost.append(postDiv)
                    document.body.append(divBoxPost);
                }
            }
        });
});

