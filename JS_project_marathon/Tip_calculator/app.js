const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const total = document.querySelector('#tamount');

const btn = document.querySelector('.calculate');


btn.addEventListener('click', function() {
    let tipamount = Math.round(bill.value*(tip.value/100),2);
    console.log(tipamount);

    // total.textContent = `${tipamount+bill.value}`
    total.innerText = `$${tipamount + parseFloat(bill.value)}`;
    
})