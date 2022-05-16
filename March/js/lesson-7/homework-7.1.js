
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

//створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArr = [
    user1 = new User(45, `dima`, `shewchenko`, `email@gmail.com`, `0935869574`),
    user2 = new User(13, `kolya`, `ivanov`, `email@gmail.com`, `0935869574`),
    user3 = new User(958, `ivan`, `sidorov`, `email@gmail.com`, `0935869574`),
    user4 = new User(814, `oleg`, `ivanov`, `email@gmail.com`, `0935869574`),
    user5 = new User(25, `lena`, `ivanova`, `email@gmail.com`, `0935869574`),
    user6 = new User(66, `marina`, `shewchenko`, `email@gmail.com`, `0935869574`),
    user7 = new User(79, `katya`, `shewchenko`, `email@gmail.com`, `0935869574`),
    user8 = new User(88, `sasha`, `shewchenko`, `email@gmail.com`, `0935869574`),
    user9 = new User(91, `nina`, `shewchenko`, `email@gmail.com`, `0935869574`),
    user10 = new User(1365, `olya`, `shewchenko`, `email@gmail.com`, `0935869574`)
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
    client1 = new Client (10, `barbos`, `ananasov`, `email@gmail.com`, 380695874269, ['potatoes', 'cheese']),
    client2 = new Client (13, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`aplle`, `banana`, `car`]),
    client3 = new Client (88, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`aplle`, `banana`, `toys`, `book`]),
    client4 = new Client (458, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`aplle`, `banana`,`book`,`doll`]),
    client5 = new Client (230, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`banana`]),
    client6 = new Client (391, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`aplle`,`sandvich`, `banana`]),
    client7 = new Client (1, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`aplle`, `banana`, `cucumber`]),
    client8 = new Client (17, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`aplle`, `banana`]),
    client9 = new Client (43, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`aplle`, `banana`]),
    client10 = new Client (12, `barbos`, `ananasov`, `email@gmail.com`, 380695874269,[`rum`, `coca-cola`])
];
console.log(clientsArr);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientSort = clientsArr.sort((a, b) => (a.order.length - b.order.length));
console.log(clientSort);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Constructor (model, manufacturer, age, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.age = age;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    }
    this.info = function () {
        console.log(`модель - ${this.model} виробник - ${this.manufacturer} рік випуску - ${this.age}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`);
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue){
        this.age = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}
let car = new Constructor( `tank`, `ua`, 2021, 500, `200л`);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2014);
car.addDriver(`vasya`);


//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, age, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.age = age;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info = function (){
        console.log(`модель - ${this.model} виробник - ${this.manufacturer} рік випуску - ${this.age}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`);
    }
    increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear = function (newValue){
        this.age = newValue;
    }
    addDriver = function (driver) {
        this.driver = driver;
    }
}
let carClas = new Car(`tank`, `bogdan`,2021, 100, 280);
console.log(carClas);
carClas.drive();
carClas.info();
carClas.increaseMaxSpeed(300);
carClas.changeYear(2043);
carClas.addDriver(`oleg`);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Sinderella (name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
}

let sinderella1 = new Sinderella(`olya`, 25, 36);
let sinderella2 = new Sinderella(`katya`, 21, 37);
let sinderella3 = new Sinderella(`olena`, 18, 38);
let sinderella4 = new Sinderella(`sasha`, 45, 39);
let sinderella5 = new Sinderella(`sofiia`, 34, 40);
let sinderella6 = new Sinderella(`mariia`, 28, 35);
let sinderella7 = new Sinderella(`nataliia`, 20, 34);
let sinderella8 = new Sinderella(`nadiia`, 35, 33);
let sinderella9 = new Sinderella(`solomiia`, 84, 41);
let sinderella10 = new Sinderella(`valeriia`, 30, 42);
let sinderellaArrey = [sinderella1, sinderella2, sinderella3, sinderella4, sinderella5, sinderella6, sinderella7, sinderella8, sinderella9, sinderella10];
console.log(sinderellaArrey);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince(`oleg`, 27, 33);
console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let newFamily = (sinderella, prince) => {
    for (const item of sinderella) {
        if (item.size === prince.shoe) {
            return `попелюшка ${item.name} підходить принцу ${prince.name}`
        }
    }
}
console.log(newFamily(sinderellaArrey, prince));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let sinderellaFind = sinderellaArrey.find((item) => item.size === prince.shoe);
console.log(sinderellaFind);