let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let c = document.querySelector(".Celsius");
    let f = document.querySelector(".Fahrenheit");
    let k = document.querySelector(".Kelvin");

    const cVal = parseFloat(c.value);
    const fVal = parseFloat(f.value);
    const kVal = parseFloat(k.value);

    let filledCount = 0;
    if (!isNaN(cVal)) filledCount++;
    
    if (!isNaN(fVal)) filledCount++;
    if (!isNaN(kVal)) filledCount++;

    if (filledCount !== 1) {
        alert("Please fill only one field.");
        return;
    }

    if (!isNaN(cVal)) {
        let calcF = (cVal * 1.8 + 32).toFixed(2);
        let calcK = (cVal + 273.15).toFixed(2);
        f.value = calcF;
        k.value = calcK;
    } else if (!isNaN(fVal)) {
        let calcC = ((fVal - 32) / 1.8).toFixed(2);
        let calcK = (parseFloat(calcC) + 273.15).toFixed(2);
        c.value = calcC;
        k.value = calcK;
    } else if (!isNaN(kVal)) {
        let calcC = (kVal - 273.15).toFixed(2);
        let calcF = ((kVal - 273.15) * 1.8 + 32).toFixed(2);
        c.value = calcC;
        f.value = calcF;
    }
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
});




