
//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let height = 23
let width = 10
let s = 10*23
console.log(s + 'cm')

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v =((3.14 * (dC*dC))/4)* heightC;
    console.log(v + 'm');


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

  console.log (5 < 6);
  console.log (5 > 6);
  console.log (5 === 6);
  console.log (5 == 6)
  console.log (10 === 10);
  console.log (10 == 10);
  console.log (10 < 10);
  console.log (10 > 10);
  console.log (10 !== 10);
  console.log (123 === '123');
  console.log (123 !== '123');