"use strict;"

order = {
    name: 'Молоко',
    description: 'asdqf',
    price: 2,
    currency: '$',
    firm: 'sacbdf',
    date: '2019',
}
let number = 0;

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
    
    number++;

    let temp = `<tr class="order tr" id="${number}">
        <td class="name" onclick="orderDescription(this)">${name}</td>
        <td>${description}</td>
        <td>${price}</td>
        <td>${currency}</td>
        <td>${firm}</td>
        <td>${date}</td>
        <td class="btnDelRow" onclick="delRow(this)" >&#10006; </td>
    </tr>`;
    table.innerHTML += temp;
    }
    else alert('Товар неправильно оформлен');
    function validOrder(order) { 
        if ((order.price < 0) || !Number.isInteger(order.price) || (order.name === '') || (order.description === '') || (order.currency === '') || (order.firm === '') || (order.date === '')) return false;
            return true;
    }
    
}
orderInformation(order);
orderInformation(order);
orderInformation(order);
orderInformation(order);
orderInformation(order);


function delRow(t){  
    let tr = t.parentNode;
    tr.classList.add("tr_remove");

    setTimeout(function(){
        tr.remove()
    }, 300);
}


formAdd.addEventListener('submit', function(event){
    event.preventDefault();

    let form = document.forms.formAdd; 
    let order = {
        name:  form.elements.name.value,
        description: form.elements.description.value,
        price: parseInt(form.elements.price.value, 10),
        currency: form.elements.currency.value,
        firm: form.elements.firm.value,
        date: parseInt(form.elements.date.value, 10),
    }

    orderInformation(order);
    form.reset();
});
 let k = 1;

function orderDescription(t){
    let order = t.parentNode;
    let cells = order.querySelectorAll("td");
    let information = `
        <div name="contentDescription">
			<h1>${cells[0].innerHTML}</h1>
			<div class="flex">
				<div class="col col_13">
					<img src="images/product.png" alt="image" />
				</div>
				<div class="col col_13 no_margin_right">
					<table>
						<tr>
							<td>Price:</td>
							<td>${cells[2].innerHTML}</td>
						</tr>
						<tr>
							<td>Currency:</td>
							<td>${cells[3].innerHTML}</td>
						</tr>
						<tr>
							<td>Firm:</td>
							<td>${cells[4].innerHTML}</td>
						</tr>
						<tr>
							<td>Date:</td>
							<td>${cells[5].innerHTML}</td>
						</tr>
					</table>
				</div>
			</div>
			<h2>Product Description</h2>
			<p>${cells[1].innerHTML}</p>
		</div>`;
    document.querySelector(".description").innerHTML = information;
}


 

tbl.addEventListener('click', (event) => {
    let tr = tbl.getElementsByClassName('tr');
    console.warn( Array.from(tr).indexOf(event.target.parentNode));
});
   
