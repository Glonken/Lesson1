"use strict;"

let getDigitsSum = (a) =>
{
    let sum = 0;
    for (let i = 0; i < a.length; i++)
    {
        if ((a[i] =='.') || (a[i] == ',')) {}
        else sum += Number(a[i]);
    }
    return sum;
}

let chislo = prompt ('Введите число (сумма всех цифр числа)',);
alert (getDigitsSum(chislo));