"use strict;"

let isEven = (a) =>
{
    if ((a % 2) == 0) return true;
    else return false;
}

let a = prompt ('Введите целое число (четное или нечетное)',);
alert (isEven(a));