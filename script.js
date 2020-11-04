"use strict;"
let userFirstName = "Ilya";
let userLastName = "Kiselev";
let userBirthDay;
let userBirthMonth;
let userBirthYear;
let userAge;


userBirthDay = prompt ("Введите День вашего дня рождения","");
userBirthMonth = prompt ("Введите Месяц вашего дня рождения","");
userBirthYear = prompt ("Введите Год вашего дня рождения","");

userAge = 2020 - userBirthYear;

alert (`${userLastName}, ${userFirstName}, ${userBirthDay}.${userBirthMonth}.${userBirthYear}, age - ${userAge}`);