const container = document.querySelector('.container');

function genColorContainers(){
    for (let i = 0; i < 12; i++) {
        const colorContainerEl = document.createElement('div');
        colorContainerEl.classList.add('color-container');
    
        // assigning random color to inner text setting it as background color
        colorContainerEl.innerText = randomColor();
        colorContainerEl.style.backgroundColor = colorContainerEl.innerText;
    
        container.appendChild(colorContainerEl);
    }
}

genColorContainers()

function randomColor(){
    const chars = '0123456789abcdef'
    const colorCodeLength = 6
    let colorCode = ''
    for (let i = 0; i < colorCodeLength; i++) {
        // will give the random number between 0 to 15
        const randomNum = Math.floor(Math.random() * chars.length)
        // adding a random char in each loop 
        colorCode += chars.substring(randomNum, randomNum + 1)
        // console.log(colorCode, randomNum)
    }
    // after the loop execute we get a 6digit hex code
    return '#' + colorCode
}

const span = document.querySelector('span')
span.addEventListener('click', () => {
    container.innerHTML = '';
    genColorContainers();
})