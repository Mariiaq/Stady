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
let car = new Constructor( `tank`, `audi`, 2021, 250, `5л`);
console.log(car);
    car.drive();
    car.info();
    car.increaseMaxSpeed(10);
    car.changeYear(2015);
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
let car = new Car(`bmv`, `audi`,2023, 150, 25);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(2045);
car.addDriver(`Petro`);

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

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince(`oleg`, 27, 33);
console.log(prince);

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.

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