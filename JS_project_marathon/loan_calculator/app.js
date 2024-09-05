container = document.querySelector('.container');


document.addEventListener('change', function(event) {
    const amount = parseFloat(document.querySelector('#amount').value);
    const annualInterestRate = parseFloat(document.querySelector('#interest').value);
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    const months = parseInt(document.querySelector('#months').value);

    const emiNumerator = amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
    const emiDenominator = Math.pow(1 + monthlyInterestRate, months) - 1;
    const emi = emiNumerator / emiDenominator;

    const span = document.querySelector("span");
    span.innerText = emi.toFixed(2);
});
