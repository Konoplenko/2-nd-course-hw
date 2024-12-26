function turnTheTextOver(userInput) {
    const reversedText = userInput.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversedText}`);
}

function askUser() {
    const userInput = prompt('Введите текст, который нужно перевернуть:');
    if (userInput === null || userInput.trim() === '') {
        alert('Вы не ввели текст. Попробуйте снова.');
        return;
    } 
    turnTheTextOver(userInput);
}