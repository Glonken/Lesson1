"use strict;"

firstCity = {
    name: 'А',
    founded: 1282,
    population: 540000,
    country: 'Казахстан',
    showFullInformation: () => console.warn(`Город ${this.name} был основан в ${this.founded} и расположен в стране ${this.country}, население города составляет ${this.population} человек`),
}
secondCity = {
    name: 'Минск',
    founded: 1282,
    population: 420000,
    country: 'Беларусь',
    showFullInformation: () => console.warn(`Город ${this.name} был основан в ${this.founded} и расположен в стране ${this.country}, население города составляет ${this.population} человек`),
}
let thirdCity = new Object();
for (let key in firstCity) {
    thirdCity[key] = firstCity[key];
}

thirdCity.name = 'Антоновка';
thirdCity.founded = 1090;
thirdCity.population = 650332;
thirdCity.country = 'Россия';


fourthCity = Object.assign({}, secondCity);
fourthCity.name = 'Уфа';
fourthCity.founded = 858;
fourthCity.population = 650123;
fourthCity.country = 'Россия';

let showCitiesInformation = () => {
    firstCity.showFullInformation();
    secondCity.showFullInformation();
    thirdCity.showFullInformation();
    fourthCity.showFullInformation();
}

showCitiesInformation();
