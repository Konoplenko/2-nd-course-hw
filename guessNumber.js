function guessNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    ask(randomNumber);
}

function ask(randomNumber){
    const answer = prompt("Угадайте число от 1 до 100");
    if(answer === null){
        return;
    }
    const number = parseInt(answer);
    if(isNaN(number)){
        alert('Неверное значение.'); 
        ask(randomNumber);
    } else if(randomNumber > number){
        alert('Загаданное число больше.'); 
        ask(randomNumber);
    } else if(randomNumber < number){
        alert('Загаданное число меньше.'); 
        ask(randomNumber);
    } else{
        alert('Молодец! Вы угадали.'); 
    }
}