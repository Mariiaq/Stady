
//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
//-- отримує текст з параграфа з id "content"

const txtContent = document.getElementById(`content`).innerText;

console.log(txtContent);

// -- отримує текст з блоку з id "rules"

let txtRules = document.getElementById("rules").innerText;
console.log(txtRules);

//-- замініть текст параграфа з id 'content' на будь-який інший

let contentIner = document.getElementById(`content`).innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quasi.`;

//-- замініть текст параграфа з id 'rules' на будь-який інший

let rulesIner = document.getElementById(`rules`).innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at, delectus labore minus molestiae nisi tempore ullam voluptatem voluptatum?`;

//-- змініть кожному елементу колір фону на червоний

let backgroundRedContent = document.getElementById(`content`).style.background = `red`;
let backgroundRedRules = document.getElementById(`rules`).style.background = `red`;
let backgroundRedFcRules = document.getElementsByClassName(`fc_rules`);
for (let i = 0; i < backgroundRedFcRules.length; i++) {
    const backgroundRedFcRule = backgroundRedFcRules[i];
    backgroundRedFcRule.style.background = `red`;
}

//-- змініть кожному елементу колір тексту на синій

let backgroundBlueContent = document.getElementById(`content`).style.background = `blue`;
let backgroundBlueRules = document.getElementById(`rules`).style.background = `blue`;
let backgroundBlueFcRules = document.getElementsByClassName(`fc_rules`)
for (let i = 0; i < backgroundBlueFcRules.length; i++) {
    const backgroundBlueFcRule = backgroundBlueFcRules[i];
    backgroundBlueFcRule.style.background = `blue`;
}

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log

let classRules = document.getElementById(`rules`);
console.log(classRules);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний

let txtRedFcRules = document.getElementsByClassName(`fc_rules`);
for (let i = 0; i < txtRedFcRules.length; i++) {
    const txtRedFcRule = txtRedFcRules[i];
    txtRedFcRule.style.color = `red`;

}


