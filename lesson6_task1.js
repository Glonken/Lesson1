"use strict";

let order = {
    name: 'Молоко',
    description: 'asdqf',
    price: 2,
    currency: '$',
    firm: 'sacbdf',
    date: '2019',
}

let unfilledOrder = {
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
        date = '1990',
        } = order;
    let table = document.querySelector('#tbl');

    let temp = `<tr>
        <td><a id="button" href="productdetail.html">${name} </a></td>
        <td>${description}</td>
        <td>${price}</td>
        <td>${currency}</td>
        <td>${firm}</td>
        <td>${date}</td>
    </tr>`;
    table.innerHTML += temp;
    }
    else console.warn('Товар неправильно оформлен');
    
    function validOrder(order) { 
        if ((order.price < 0) || !Number.isInteger(order.price) || (order.name === '') || (order.description === '') || (order.currency === '') || (order.firm === '') || (order.date === '')) return false;
            return true;
    }
    
}
orderInformation(order);

