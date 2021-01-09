"use strict;"

order = {
    name: 'Молоко',
    description: 'asdqf',
    price: 2.234,
    currency: '$',
    firm: 'sacbdf',
    date: '2019',
}

unfilledOrder = {
    name: 'Масло',
    firm: 'da',
    date: '2018',
}
function orderInformation(order) {
    if (validOrder(order)) {
    let {
        name = '-',
        description = '-',
        price = 0,
        currency = '-',
        firm = '-',
        date = 1990,
        } = order;
    console.warn(name, description, price, currency, firm, date); 
    }
    else console.warn('Товар неправильно оформлен');
    
    function validOrder(order) { 
        if ((order.price < 0) || !Number.isInteger(order.price) || (order.name === '') || (order.description === '') || (order.currency === '') || (order.firm === '') || (order.date === '')) return false;
            return true;
    }
}
orderInformation(order);
