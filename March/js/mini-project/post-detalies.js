//На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const posts = JSON.parse(localStorage.getItem(`clickPost`));
const divBox = document.createElement(`div`);
const postUl = document.createElement(`ul`);

divBox.style.width = `850px`;
divBox.style.height = `200px`;
divBox.style.display = `flex`;
divBox.style.flexWrap = `wrap`;
divBox.style.justifyContent = `space-around`;
divBox.style.alignContent = `center`;

divBox.style.border = `3px solid`
divBox.style.borderColor = `violet`;
divBox.style.borderRadius = `5px`
divBox.style.margin = `0px`;

for (let [key, value] of Object.entries(posts)) {
    const postLi = document.createElement(`li`);
    postLi.innerHTML = `${key}:${value}`;

    postUl.append(postLi);
    divBox.append(postUl)

}
document.body.append(divBox);

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(coments => {
        const divComentBox = document.createElement(`div`)
        divComentBox.style.width = `850px`;
        divComentBox.style.height = `500px`;
        divComentBox.style.display = `flex`;
        divComentBox.style.alignContent = `space-between`;
        divComentBox.style.justifyContent = `space-around`;


        for (const coment of coments) {
            if (posts.id === coment.postId) {
                const comentDiv = document.createElement(`div`);
                comentDiv.innerHTML = `<h5>${coment.name}</h5> <p>${coment.body}</p>`;
                comentDiv.style.width = `23%`;
                comentDiv.style.height = `300px`;
                comentDiv.style.margin = `5px`;
                comentDiv.style.display = `flex`;
                comentDiv.style.flexDirection = `column`;
                comentDiv.style.alignItems = `center`;
                comentDiv.style.justifyContent = `center`;
                comentDiv.style.margin = `5px;`;

                comentDiv.style.border = `3px solid`
                comentDiv.style.borderColor = `violet`;
                comentDiv.style.borderRadius = `5px`
                comentDiv.style.margin = `5px`;


                divComentBox.append(comentDiv);
            }
        }


        document.body.append(divComentBox)
    });











