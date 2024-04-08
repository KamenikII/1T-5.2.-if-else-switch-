// task 1
let a = prompt('Task 1. Enter square side:')
alert(`The perimeter of the square with side ${a} is ${a*4}
The area of the square with side ${a} is ${a*a}`)

// task 2
let x = 1    //2
let y = 1    //2
let a2 = ++x //2
let b = y++  //1
alert(`Task 2. 
x = ${x}
y = ${y}
a = ${a2}
b = ${b}`)

// task 3
let x3 = 4;            //12
let y3 = 3 + (x3 *= 3);//15
alert(`Task3.
x = ${x3}
y = ${y3}`)

// task 4
let a4 = Number(prompt("Первое число?", 1));
let b4 = Number(prompt("Второе число?", 2));
alert(`Task 4. Correct answer is ${a4 + b4}`); // 12

// task 5
let year = Number(prompt('Task 5. Enter a year: ', 2024));
if (year%4==0 & year%100!=0 || year%400==0 ) {
    alert(year + ` is a leap year.`);
} else alert(year + ` is not a leap year.`)
