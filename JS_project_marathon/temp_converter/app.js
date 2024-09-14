const celcius  = document.getElementById('Celsius');
const fahrenheit = document.getElementById('Fahrenheit');
const kelvin = document.getElementById('Kelvin');

celcius.addEventListener('input', updateTemp);
fahrenheit.addEventListener('input', updateTemp);
kelvin.addEventListener('input', updateTemp);

function updateTemp(e) {
    // console.log(e.target.name)

    if(e.target.name === 'Celsius'){
        let ctemp = parseFloat(e.target.value);
        fahrenheit.value = Math.round((ctemp * 9/5) + 32).toFixed(2);
        kelvin.value = Math.round(parseFloat(ctemp) + 273.15).toFixed(2);
    }else if(e.target.name === 'Fahrenheit') {
        let ftemp = parseFloat(e.target.value);
        celcius.value = Math.round((ftemp - 32) * 5/9).toFixed(2);
        kelvin.value = Math.round(parseFloat(celcius.value) + 273.15).toFixed(2);

    }else{
        let ktemp = parseFloat(e.target.value)
        celcius.value = Math.round(ktemp - 273.15).toFixed(2);
        fahrenheit.value = Math.round(parseFloat(celcius.value) * 9/5 + 32).toFixed(2);
    }
}



