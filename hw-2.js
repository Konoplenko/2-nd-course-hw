// Задание 1

let a = 10;
alert('Значение: ' + a);
a = 20;
alert('Значение: ' + a);

// Задание 2

let ageIpone = 2007;
alert('Год выпуска первого iPhone: ' + ageIpone);

// Задание 3

let creatorName = 'Брендан Эйком';
alert('Имя создателя языка JavaScript:' + creatorName);

// Задание 4

let a = 10;
let b = 2;

let sum = a + b;
alert('Сумма: ' + sum);

let difference = a - b;
alert('Разность: ' + difference);

let derivative = a * b;
alert('Произведение: ' + derivative);

let private = a / b;
alert('Частное: ' + private);

// Задание 5

let result = 2 ** 5;
alert('Результат: ' + result);

// Задание 6

let a = 9;
let b = 2;
let remainsDivision = 9 % 2;
alert('Остаток от деления: ' + remainsDivision);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8

let age = prompt('Сколько вам лет?');
alert('Ваш возраст: ' + age);

// Задание 9

let user = {
    name: "Алёна",
    age: 36,
    isAdmin: true
};
alert('Имя: ' + user.name + '\nВозраст: ' + user.age + "\nАдмин: " + user.isAdmin);

// Задание 10

let name = prompt('Пожалуйста, введите ваше имя.');
alert(`Привет, ${'name'}!`);