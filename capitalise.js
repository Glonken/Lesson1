"user strict;"
let capitalise = (s) => 
{
    s = s[0].toUpperCase() + s.substring(1);
    return s;
}

let s = prompt ('Введите строку (повышение регистра первой буквы)',);
console.warn (capitalise (s));