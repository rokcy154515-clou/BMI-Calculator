const weight = document.getElementById('Weight');
const height = document.getElementById('Height');
const result = document.getElementById('result')
function CalculateBMI() {
    const w = weight.value;
    const h = height.value;
    if (w == "" || h == "") {
        alert("Please enter valid weight and height");
        return;
    }
    else {
        const bmi = ((w * 10000) / (h * h));
        if (bmi < 18.5) {
            result.innerHTML = "Underweight:" + bmi.toFixed(2);
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = "Normal weight(Healthy):" + bmi.toFixed(2);
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = "Overweight:" + bmi.toFixed(2);
        }
        else if (bmi >= 30 && bmi <= 34.9) {
            result.innerHTML = "Obesity(Class I):" + bmi.toFixed(2);
        }
        else if (bmi >= 35 && bmi <= 39.9) {
            result.innerHTML = "Obesity(Class II):" + bmi.toFixed(2);
        }
        else if (bmi >= 40) {
            result.innerHTML = "Extreme Obesity:" + bmi.toFixed(2);
        }
    }
}