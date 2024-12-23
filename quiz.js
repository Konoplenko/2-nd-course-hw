const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let correctAnswersCount = 0;
    quiz.forEach((item, index) => {
        const userAnswer = prompt(`Вопрос ${index + 1}:\n${item.question}\n${item.options.join("\n")}`);
        if (userAnswer !== null && userAnswer !== "") {
            const answerNumber = parseInt(userAnswer);
            if (answerNumber === item.correctAnswer) {
                correctAnswersCount++;
            }
        }
    });
    alert(`Игра окончена!\nВы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов.`);
}