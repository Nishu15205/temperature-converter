let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let c = document.querySelector(".Celsius");
    let f = document.querySelector(".Fahrenheit");
    let k = document.querySelector(".Kelvin");

    const cVal = c.value;
    const fVal = f.value;
    const kVal = k.value;

    let filledCount = 0;
    if (cVal !== '') filledCount++;
    if (fVal !== '') filledCount++;
    if (kVal !== '') filledCount++;

    if (filledCount !== 1) {
        alert("Please fill only one field.");
        return;
    }

    if (cVal !== '') {
        let CalcF = (cVal * 1.8 + 32);
        let Calck = (cVal + 273.15);
        f.value = CalcF;
        k.value = Calck;
    }
    else if (fVal !== ''){
        let CalcC = ((fVal - 32) / 1.8);
        let Calck = (CalcC + 273.15);
        c.value = CalcC;
        k.value = Calck;
    }
    else if (kVal !== ''){
        let CalcC = (kVal - 273.15);
        let CalcF = ((kVal - 273.15) * 1.8 + 32);
        c.value = CalcC;
        f.value = CalcF;
    }
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
});

