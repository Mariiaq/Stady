//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

const div = document.createElement(`div`);
div.style.display = `flex`;
div.style.flexWrap = `wrap`


fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement(`div`);

            userDiv.innerHTML = `<h2>Id: ${user.id}</h2> <h3>Name: ${user.name}</h3>`;
            userDiv.style.width = `45%`;
            userDiv.style.height = `250px`;
            userDiv.style.display = `flex`;
            userDiv.style.flexDirection = `column`;
            userDiv.style.justifyContent = `center`;
            userDiv.style.alignItems = `center`

            userDiv.style.border = `3px solid`
            userDiv.style.borderColor = `violet`;
            userDiv.style.borderRadius = `5px`
            userDiv.style.margin = `5px`;


            const userButton = document.createElement(`button`);
            userButton.innerText = `More`;
            userButton.style.width = `30%`;
            userButton.style.height = `50px`;
            userButton.style.borderRadius = `5px`

            userButton.addEventListener(`click`, function () {
                localStorage.setItem(`clickUser`, JSON.stringify(user));
                window.location = `user-details.html`;
            })

            userDiv.append(userButton)
            div.append(userDiv);


        }
    });
document.body.append(div);
