
//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(('Довжина стрінги: ') + str1.length);
console.log(('Довжина стрінги: ') +str2.length);
console.log(('Довжина стрінги: ') +str3.length);

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let bedStr = ' dirty string   '
let clearStr = bedStr.trim();
console.log(clearStr);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr);

let str = 'Каждый охотник желает знать';
let array = str.split(' ');
console.log(array);
document.write(array);

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

function delete_characters(str, length){
    return str.substring(0, length);
}
console.log(delete_characters('Каждый охотник желает знать', 7));



//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str4 = "HTML JavaScript PHP"
let insert_dash = (str4) => {
    let newStr = str4.split(' ').join('-').toUpperCase();
    return newStr
}
console.log(insert_dash(str4));
document.write(insert_dash(str4));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let upFirst = (txt) => {
    return txt[0].toUpperCase() + txt.slice(1);
}

console.log(upFirst('kаждый охотник желает знать'));

