// Задание 1

function getMin(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

// Задание 2

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
}

// Задание 3

function printSquare(number) {
    console.log(number * number);
};

function getSquare(number) {
    return number * number;
}

// Задание 4

function greetUser() {
    const age = parseInt(prompt("Сколько вам лет?"), 10);
    if (isNaN(age)) {
        alert("Вы ввели неправильное значение");
        return;
    } if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}

greetUser();

// Задание 5

function multiplyIfNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}  

// Задание 6

function calculateCube() {
    const userInput = prompt("Введите число:");
    if (isNaN(userInput)) {
        return 'Переданный параметр не является числом';
    }
    const number = Number(userInput);
    const cube = number ** 3;
    return `${number} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(calculateCube(i));
}

// Задание 7

const circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius; // Периметр окружности:
    }
}
  
  const circle2 = {
    radius: 10, 
    getArea: function() {
      return Math.PI * this.radius ** 2; 
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
}