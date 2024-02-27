
let card1 = document.querySelector("#card1");

let card2 = document.querySelector("#card2");

let card3 = document.querySelector("#card3");

let atmName = document.querySelector("#atmName");


card1.addEventListener("click", () => {
    card1.style.width = "260px";
    card1.style.height = "160px";
    
    card2.style.width = "250px";
    card2.style.height = "150px";
    
    card3.style.width = "250px";
    card3.style.height = "150px";

    atmName.textContent  = "Mastercard"

})

card2.addEventListener("click", () => {
    card2.style.width = "260px";
    card2.style.height = "160px";
    
    card1.style.width = "250px";
    card1.style.height = "150px";
    
    card3.style.width = "250px";
    card3.style.height = "150px";

    atmName.textContent  = "Visa"


})

card3.addEventListener("click", () => {
    card3.style.width = "260px";
    card3.style.height = "160px";

    card2.style.width = "250px";
    card2.style.height = "150px";
    
    card1.style.width = "250px";
    card1.style.height = "150px";

    atmName.textContent  = "Verve";

    var afterElement = document.querySelector("#checkboxInput1:checked + .toggleSwitch::after");
    if (afterElement) {
        afterElement.style.transform = "translateX(5px)"; 
    }




});



