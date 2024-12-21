const { task, answer } = generateTask(); 
const isCorrect = checkAnswer(task, answer);

if (isCorrect) {
    alert('Правильно!');
} else {
    alert(`Неправильно! Правильный ответ: ${answer}`);
}

function generateTask() {
    const operations = ['+', '-', '*', '/']; 
    const operation = operations[Math.floor(Math.random() * operations.length)]; 

    let a, b, task;

    switch (operation) {
        case '+':
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * 20) + 1; 
            task = `${a} + ${b}`;
            break;
        case '-':
            a = Math.floor(Math.random() * 20) + 1; 
            b = Math.floor(Math.random() * a) + 1; 
            task = `${a} - ${b}`;
            break;
        case '*':
            a = Math.floor(Math.random() * 10) + 1; 
            b = Math.floor(Math.random() * 10) + 1; 
            task = `${a} * ${b}`;
            break;
        case '/':
            b = Math.floor(Math.random() * 10) + 1; 
            a = b * (Math.floor(Math.random() * 10) + 1); 
            task = `${a} / ${b}`;
            break;
    }
    return { task, answer: eval(task) }; 
}

function checkAnswer(task, correctAnswer) {
    const userAnswer = prompt(`Решите задачу: ${task}`); 
    return userAnswer == correctAnswer; 
}