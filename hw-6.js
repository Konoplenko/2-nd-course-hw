// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === 10) {
        break;
    }
}

// Задание 2

const array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4));

// Задание 3

const array3 = [1, 3, 5, 10, 20];
const result = array3.join(' ');

console.log(result);

// Задание 4

const rows = 3; 
const cols = 3; 
const array4 = []; 

for (let i = 0; i < rows; i++) {
    const row = []; 
    for (let j = 0; j < cols; j++) {
        row.push(1); 
    }
    array4.push(row); 
}

console.log(array4);

// Задание 5

let array5 = [1, 1, 1];

array5.push(2, 2, 2);

console.log(array5); 

// Задание 6

let array6 = [9, 8, 7, 'a', 6, 5];

array6.sort((a, b) => a - b);

array6 = array6.filter(item => typeof item === 'number');

console.log(array6);

// Задание 7

const array7 = [9, 8, 7, 6, 5];

const userGuess = prompt('Угадайте число из массива [9, 8, 7, 6, 5]:');

const guessNumber = Number(userGuess);

if (array7.includes(guessNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8

let str = 'abcdef';

let reversedStr = str.split('').reverse().join('');

console.log(reversedStr); 

// Задание 9

const array9 = [[1, 2, 3], [4, 5, 6]];

const flatArray = [].concat(...array9);

console.log(flatArray);

// Задание 10

const array10 = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < array10.length - 1; i++) {
    const sum = array10[i] + array10[i + 1];
    console.log(`Сумма ${array10[i]} и ${array10[i + 1]} равна ${sum}`);
}

// Задание 11

function squareArray(numbers) {
    return numbers.map(number => number * number);
}

const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(inputArray);

console.log(squaredArray);

// Задание 12

function getWordLengths(words) {
    return words.map(word => word.length);
}

const inArray = ['apple', 'banana', 'cherry', 'date'];
const lengthsArray = getWordLengths(inArray);

console.log(lengthsArray);

// Задание 13

function getNegativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
}

const inpArray = [3, -2, 5, -7, 0, -1, 4];
const negativeArray = getNegativeNumbers(inpArray);

console.log(negativeArray); // Вывод: [-2, -7, -1]

// Задание 14

const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenArray = originalArray.filter(number => number % 2 === 0);

console.log('Исходный массив:', originalArray);
console.log('Массив с четными значениями:', evenArray);

// Задание 15

const array15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const sum = array15.reduce((acc, number) => acc + number, 0);

const average = sum / array15.length;

console.log('Массив:', array15);
console.log('Среднее арифметическое:', average);