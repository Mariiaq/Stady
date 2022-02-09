// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrs = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

let num = 0;
while (num<arrs.length){
    console.log (num);
    num++;
}

// 2. перебрати його циклом for

for (let i =0; i < arrs.length; i++) {
    console.log(i);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i = 0;
while (i<arrs.length) {
    if (i%2 !==0){
        console.log(arrs[i])
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arrs.length; i++) {
  if (i % 2 !== 0)
    {
    console.log(arrs [i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

while (i<arrs.length) {
    if (i%2 === 0)
    {
        console.log(i);
    }
    i++
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arrs.length; i++) {
  if (i % 2 === 0)
    {
    console.log(i);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arrs.length; i++) {
   if (arrs[i] % 3) {
       arrs[i] = `Okten`;
       console.log(arrs[i]);
   }
}

// 8. вивести масив в зворотньому порядку.

let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length-1; i >0; i--) {
    console.log(array[i]);
}
