const counters = document.querySelectorAll('.counter');

counters.forEach(element => {
    element.textContent = 0;

    increment()
    function increment(){
        let currentValue = parseInt(element.textContent);
        const ceil = element.getAttribute('data-ceil');

        const incrementValue = Math.ceil(ceil / 10);

        if (currentValue < ceil) {
            element.textContent = currentValue + incrementValue;
            setTimeout(increment, 100);
        }else{
            element.textContent = ceil
        }
        
    }

})