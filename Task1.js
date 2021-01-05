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

let compareName = () =>
{
    if (firstCity.name > secondCity.name) {console.warn('Название первого города длиннее второго.');}
    else if (firstCity.name < secondCity.name) {console.warn('Название второго города длиннее первого.');}
    else {console.warn('Названия равны по длине.')}
}

let compareFounded = () =>
{
    if (firstCity.founded < secondCity.founded) {console.warn('Первый город основан раньше второго.');}
    else if (firstCity.founded > secondCity.founded) {console.warn('Второй город основан раньше первого.');}
    else {console.warn('Города основаны в один год.')}
}

let comparePopulation = () =>
{
    if (firstCity.population < secondCity.population) {console.warn('Численность населения больше во втором городе.');}
    else if (firstCity.population > secondCity.population) {console.warn('Численность населения больше в первом городе.');}
    else {console.warn('Численность населения в городах равна.')}
}

compareName();
compareFounded();
comparePopulation();
firstCity.showFullInformation();
secondCity.showFullInformation();