const dob = document.querySelector("#date");
const btn = document.querySelector(".btn");
const heading = document.querySelector(".main-heading");

btn.addEventListener("click", ()=>{
    if(dob.value === ''){
        alert("ente the age !!")
    }else{

        calculateAge()
    }
});

function calculateAge(){
    const birthDate = new Date(dob.value);

    const age = new Date().getFullYear()-birthDate.getFullYear() ;

    heading.textContent = `Your age is ${age} years old`;
}