const height = document.getElementById("height");
const weight = document.getElementById("weight");
const condition = document.getElementById("condition");

// Severe Thinness	< 16
// Moderate Thinness	16 - 17
// Mild Thinness	17 - 18.5
// Normal	18.5 - 25
// Overweight	25 - 30
// Obese Class I	30 - 35
// Obese Class II	35 - 40
// Obese Class III	> 40

function updateBMI(){
    const heightValue = height.value / 100; // Convert height to meters
    const weightValue = weight.value;

    const bmi = weightValue / (heightValue * heightValue);

    const result = document.getElementById("bmi");
    result.value = bmi.toFixed(2);

    // Update condition based on BMI value
    if (bmi < 16) {
        condition.textContent = "Severe Thinness";
        condition.style.color = "red";
    } else if (bmi >= 16 && bmi < 17) {
        condition.textContent = "Moderate Thinness";
        condition.style.color = "orange";
    } else if (bmi >= 17 && bmi < 18.5) {
        condition.textContent = "Mild Thinness";
        condition.style.color = "yellow";
    } else if (bmi >= 18.5 && bmi < 25) {
        condition.textContent = "Normal";
        condition.style.color = "green";
    } else if (bmi >= 25 && bmi < 30) {
        condition.textContent = "Overweight";
        condition.style.color = "yellow";
    } else if (bmi >= 30 && bmi < 35) {
        condition.textContent = "Obese Class I"
        condition.style.color = "orange";
    } else if (bmi >= 35 && bmi < 40) {
        condition.textContent = "Obese Class II"
        condition.style.color = "red"
    } else {
        condition.value = "Obese Class III"
        condition.style.color = "darkred"
    }


}

const compute = document.querySelector(".btn")

compute.addEventListener("click", updateBMI);