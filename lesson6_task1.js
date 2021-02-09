"use strict";

let orders = [
	{
    	name: 'Молоко',
    	description: 'asdqf',
    	price: 2,
    	currency: '$',
    	firm: 'sacbdf',
    	date: '2019',
	},
	{
		name: 'Масло',
    	description: 'wefwegr',
    	price: 8,
    	currency: '$',
    	firm: 'sacaqw',
    	date: '2022',
	},
	{
		name: 'Сыр',
    	description: 'qwqezas',
    	price: 12,
    	currency: '$',
    	firm: 'qweras',
    	date: '2018',
	}
]

function orderInformation(orders) {
	let [order, ...rest] = orders;
	for (let i = 0; i < orders.length; i++)
	{	 
		let {
     	   name = '-',
     	   description = '-',
        	price = 0,
        	currency = '-',
        	firm = '-',
        	date = '1990',
        	} = order;
   		let table = document.querySelector('#tbl');
    	if (validOrder()) {
    	let temp = `<tr>
        	<td class="name" onclick="orderDescription(this)">${name}</td>
        	<td>${description}</td>
        	<td>${price}</td>
        	<td>${currency}</td>
        	<td>${firm}</td>
        	<td>${date}</td>
    	</tr>`;
    	table.innerHTML += temp;
    	}
    	else {
			console.warn(`Товар ${name} неправильно оформлен`);
		}
    
    	function validOrder() { 
        	if ((price < 0) || !Number.isInteger(price) || (name === '') || (description === '') || (currency === '') || (firm === '') || (date === '')) return false;
            	return true;
    	} 
		[order, ...rest] = rest;
	} 
}

function tableLoad(){
	let html = `<h1>Orders Products</h1>
	<div id="orderContainer">
		<table id="tbl">
			<tr class="tr">
				<th class="th">Name</th>
				<th class="th">Description</th>
				<th class="th">Price</th>
				<th class="th">Currency</th>
				<th class="th">Firm</th>
				<th class="th">Date</th>
			</tr>
		</table>
	</div>`;
	document.querySelector("#content").innerHTML = html;
    orderInformation(orders);
}

tableLoad();

function orderDescription(t){
    let order = t.parentNode;
    let cells = order.querySelectorAll("td");

	let content = `
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
		<button id="btnPrev">Назад</button>`;
		document.querySelector("#content").innerHTML = content;
		addclickf();			
}

let addclickf = () => btnPrev.addEventListener('click', function(){tableLoad();});
 


