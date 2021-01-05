"use strict;"

let array = [45, 78, 10, 3];

let my = (a,b) => {
    if(a < b) {return -1;}
    else if(a > b) {return 1;}
    return 0;
}

array.sort(my);

let summElem = (array) => {
    let newMass = array.map( a => ((a - a % 10) / 10) + (a % 10));
    return newMass;
}

array = summElem(array);
console.warn(array);

