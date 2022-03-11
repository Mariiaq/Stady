//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArr = [
    user1 = new User(101, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user2 = new User(25, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user3 = new User(354, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user4 = new User(489, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user5 = new User(545, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user6 = new User(698, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user7 = new User(71, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user8 = new User(84, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user9 = new User(92, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`),
    user10 = new User(1016, `dima`, `ivanov`, `12345@gmail.com`, `0678545352`)
]
console.log(userArr);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filt = userArr.filter((item)=> {
    if (item.id % 2 === 0){
      return item
    }
})
console.log(filt);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let userSort = userArr.sort((a,b) => a.id-b.id);
console.log(userSort);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//створити пустий масив, наповнити його 10 об'єктами Client

let clientsArr = [
    client1 = new Client (5, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269, ['potatoes', 'cheese']),
    client2 = new Client (36, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`aplle`, `banana`, `car`]),
    client3 = new Client (22, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`aplle`, `banana`, `toys`, `book`]),
    client4 = new Client (31, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`aplle`, `banana`,`book`,`doll`]),
    client5 = new Client (20, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`banana`]),
    client6 = new Client (53, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`aplle`,`sandvich`, `banana`]),
    client7 = new Client (2, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`aplle`, `banana`, `cucumber`]),
    client8 = new Client (8, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`aplle`, `banana`]),
    client9 = new Client (29, `wdfc`, `dfgd`, `gdgdg@gmail.com`, 380695874269,[`aplle`, `banana`]),
    client10 = new Client (12, `wdfc`, `dfgd`, `gdgdg@com.ua`, 380695874269,[`aplle`, `banana`])
];
console.log(clientsArr);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientSort = clientsArr.sort((a, b) => (a.order.length - b.order.length));
console.log(clientSort);
