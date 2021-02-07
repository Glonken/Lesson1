"use strict";

let number = 0;

function orderInformation(order) {
    if (validOrder(order)) {
    let {
		 id = '',
        name = '-',
        description = '-',
        amount = 0,
        currency = '-',
        manufacturer = '-',

        } = order;
    let table = document.querySelector('#tbl');
    
    number++;

    let temp = `<tr class="order tr" id="${number}">
        <td class="name" data-id="${id}" onclick="orderDescription(this)">${name}</td>
        <td>${description}</td>
        <td>${amount}</td>
        <td>${currency}</td>
        <td>${manufacturer}</td>
        <td class="btnDelRow" onclick="delRow(this)" >&#10006; </td>
    </tr>`;
    table.innerHTML += temp;
    }
    else alert('Товар неправильно оформлен');
    function validOrder(order) { 
      //  if ((order.amount < 0) || !Number.isInteger(order.amount) || (order.name === '') || (order.description === '') || (order.currency === '') || (order.manufacturer === '')) return false;
            return true;
    }
    
}




 function requestGet(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://45.67.59.109:2001/orders', true);
	xhr.send();  
	xhr.onreadystatechange = function() {  
	  if (xhr.readyState != 4) return;
	  if (xhr.status != 200) {
		 alert(xhr.status + ': ' + xhr.statusText);
	  } else {
			let ord_items = xhr.responseText;
			ord_items =  JSON.parse(ord_items);
			ord_items.forEach(element => {	
				orderInformation(element);
			});
	  }
	}
}


function tableLoad(){
	let html = `	<h1>Orders Products</h1>
	<div id="orderContainer">
		<table id="tbl">
			<tr class="tr">
				<th class="th">Name</th>
				<th class="th">Description</th>
				<th class="th">Amount</th>
				<th class="th">Currency</th>
				<th class="th">Manufacturer</th>
				<th class="th">Control</th>
			</tr>
		</table>
	</div>`;
	document.querySelector("#content").innerHTML = html;
	requestGet();
}

tableLoad();
 



function delRow(t){  
    let tr = t.parentNode;
    tr.classList.add("tr_remove");

    setTimeout(function(){
        tr.remove()
    }, 300);
}



 let k = 1;

function orderDescription(t){

	let id = t.dataset.id;

	let xhr = new XMLHttpRequest();

	let params = 'id=' + encodeURIComponent(id);

	let url = 'http://45.67.59.109:2001/order?' + params;
	xhr.open("GET", url, true);

	
	xhr.onreadystatechange = function() { 
	  if (xhr.readyState != 4) return;
		
	  if (xhr.status != 200) {
		 alert(xhr.status + ': ' + xhr.statusText);
	  } else {
		
		  let obj = JSON.parse(xhr.responseText);
 
		let content = `
			<h1>${obj.name}</h1>
			<div class="flex">
				<div class="col col_13">
					<img src="images/product.png" alt="image" />
				</div>
				<div class="col col_13 no_margin_right">
					<table>
						<tr>
							<td>Price:</td>
							<td>${obj.amount}</td>
						</tr>
						<tr>
							<td>Currency:</td>
							<td>${obj.currency}</td>
						</tr>
						<tr>
							<td>manufacturer:</td>
							<td>${obj.manufacturer}</td>
						</tr>
					</table>
				</div>
			</div>
			<h2>Product Description</h2>
			<p>${obj.description}</p>
			<button data-id=${obj.id} id="btnBut" >Купить </button>
			<button  id="btnPrev" >Назад </button>`;
		  document.querySelector("#content").innerHTML = content;
		  addclickf()			
	  }
	
	}
	xhr.send(); 
}

 function addclickf(){

	btnBut.addEventListener('click', function(){
		let id1 = this.dataset.id;

		let xhr2 = new XMLHttpRequest();
		let url = 'http://45.67.59.109:2001/order/pay';
		xhr2.open("POST", url, true);

		let json = {
			id: id1
		}
		
		xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhr2.onreadystatechange = function() {
		if (xhr2.readyState != 4) return;
		if (xhr2.status != 200) {
			alert(xhr2.status + ': ' + xhr2.statusText);
		} else {
				alert( xhr2.responseText);
		}
		}
		xhr2.send(JSON.stringify(json));
	})

	btnPrev.addEventListener('click', function(){
		tableLoad()
	})
 }
 
