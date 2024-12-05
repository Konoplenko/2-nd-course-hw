// Задание 1

for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

// Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3

for (let k = 7; k <= 22; k++) {
    console.log(i);
}

// Задание 4

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++; 
}
console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${num}`);

// Задание 6

let firstFriday = 3;
for (let day = 1; day <= 31; day++) {
    if (day >= firstFriday && (day - firstFriday) % 7 === 0) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }
}