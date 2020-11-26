"use strict;"

let guessNumber = () =>
{
    let n = Math.floor(Math.random() * (11 - 1)) + 1;
    let a = 0;
    for (let i = 1; i < 6; i++)
    {
        a = Number(prompt(`Введите загаданное число (осталось ${6 - i} попыток)`,));
        if (n > a) {alert ('Мимо, загаданное число больше');}
        else if (n < a) {alert ('Мимо, загаданное число меньше');}
        else if (n = a) 
        {
            alert (`Правильно, вы угадали число ${n} с ${i}-ой попытки!`);
            break;
        }
        if ((n != a) && (i == 5)) alert (`Неправильно, попытки закончились, было загадано число ${n}`);
    }
}

guessNumber();