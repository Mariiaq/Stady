//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

// const form = document.createElement(`form`);
// const inputName = document.createElement(`input`);
// inputName.type = `text`;
// const inputAge = document.createElement(`input`);
// inputAge.type = `text`;
// const button = document.createElement(`button`);
// button.innerText = `send`;
//
// form.append(inputName, inputAge);
// document.body.append(form, button);
//
// button.addEventListener(`click`, function () {
//     localStorage.setItem(`name`, inputName.value);
//     localStorage.setItem(`age`, inputAge.value);
// });


// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// const formCar = document.createElement(`form`);
// formCar.name = `formCar`;
// const inputModel = document.createElement(`input`);
// inputModel.type = `text`;
// const inputType = document.createElement(`input`);
// inputType.type = `text`;
// const inputVolume = document.createElement(`input`);
// inputVolume.type = `text`;
//
// const button = document.createElement(`button`);
// button.innerText = `send`;
//
// formCar.append(inputModel, inputType, inputVolume);
// document.body.append(formCar, button);
//
// button.addEventListener(`click`, function (){
//     const arr = [];
//     const a = inputVolume.value;
//     const b = inputType.value;
//     const c = inputModel.value;
//     arr.push(b, a, c);
//     localStorage.setItem(`arrCar`, JSON.stringify(arr));
// })

