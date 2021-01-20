"use strict;"

order = {
    name: 'Молоко',
    description: 'asdqf',
    price: 2,
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

 
// let tr = document.createElement('tr');
// let k = 1;
// for (let i = 0; i < 6; i++) {
// 	let td = document.createElement('td');
// 	switch (k) {
//         case 1:
//             td.innerHTML = order.name;
//             break;
//         case 2:
//             td.innerHTML = order.description;
//             break;
//         case 3:
//             td.innerHTML = order.price;
//             break;
//         case 4:
//             td.innerHTML = order.currency;
//             break;
//         case 5:
//             td.innerHTML = order.firm;
//             break;
//         case 6:
//             td.innerHTML = order.date;
//             break;
//       }	
//     k++;
//     tr.appendChild(td);
// }
	
// table.appendChild(tr);