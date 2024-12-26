// Задание 1

let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);

// Задание 2

function filterByStart(array, startString) {
    const lowerStartString = startString.toLowerCase();

    return array.filter(item => {
      const lowerItem = item.toLowerCase();
      return lowerItem.startsWith(lowerStartString);
    });
  }
  
  const array = ['JavaScript', 'java', 'Python', 'javascript', 'JAVA', 'JavaScripT'];
  const startString = 'js';
  
  const result = filterByStart(array, startString);
  console.log(result);

// Задание 3

// 1
let number = 32.58884;
let result = Math.floor(number);
console.log(result);

// 2
let number = 32.58884;
let result = Math.ceil(number);
console.log(result);

// 3
let number = 32.58884;
let result = Math.round(number);
console.log(result);

// Задание 4

let numbers = [52, 53, 49, 77, 21, 32];

let min = Math.min(...numbers);

let max = Math.max(...numbers);

console.log("Минимальное значение:", min); 
console.log("Максимальное значение:", max);

// Задание 5

function randomNumber(){
    const result = Math.floor(Math.random() * 10) + 1;
    console.log(result);
}

// Задание 6

function generateRandomArray(number) {
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
      console.error('Ошибка: передано некорректное число.');
      return [];
    }

    const arrayLength = Math.floor(number / 2);

    let randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
      let randomNumber = Math.floor(Math.random() * (number + 1));
      randomArray.push(randomNumber);
    }
  
    return randomArray;
}

let result = generateRandomArray(10);
console.log(result); 

// Задание 7

function getRandomNumberInRange(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || !Number.isInteger(min) || !Number.isInteger(max)) {
      console.error('Ошибка: переданы некорректные числа.');
      return null;
    }
  
    if (min > max) {
      console.error('Ошибка: первое число должно быть меньше или равно второму.');
      return null;
    }
  
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

let result = getRandomNumberInRange(5, 15);
console.log(result);

// Задание 8

let currentDate = new Date();

console.log("Текущая дата:", currentDate.toLocaleDateString());

// Задание 9

let currentDate = new Date();

let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата:", currentDate.toLocaleDateString());
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());

// Задание 10

function formatDate(date) {
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
  
    const daysOfWeek = [
      "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
  
    return `${formattedDate}\n${formattedTime}`;
}
  

let currentDate = new Date();
console.log(formatDate(currentDate));