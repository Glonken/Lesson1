"use strict;"

let cities = [];

cities[0] = {
    name: 'А',
    founded: 1282,
    population: 540000,
    country: 'Казахстан',
}

cities[1] = {
    name: 'Минск',
    founded: 1282,
    population: 420000,
    country: 'Беларусь',
}

cities[2] = {
    name: 'Антоновка',
    founded: 1090,
    population: 650332,
    country: 'Россия',
}

cities[3] = {
    name: 'Уфа',
    founded: 858,
    population: 650123,
    country: 'Россия',
}

let sortByPopulation = (cities) => {
    cities.sort((prev, next) => prev.population - next.population);
    console.warn(cities);
}

sortByPopulation(cities);