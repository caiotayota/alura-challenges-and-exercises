var title = document.querySelector(".title");
title.textContent = "Amy Nutritionist";

var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {

    var patient = patients[i];

    var tdWeight = patient.querySelector(".weight-info");
    var weight = tdWeight.textContent;
    
    var tdHeight = patient.querySelector(".height-info");
    var height = tdHeight.textContent;
    
    var tdBmi = patient.querySelector(".bmi-info");
    
    var validWeight = isValidWeight(weight);
    var validHeight = isValidHeight(height);
    
    if (!validWeight) {
        tdWeight.textContent = "Invalid Weight"
        patient.classList.add("invalid-patient");
    }
    
    if (!validHeight) {
        tdHeight.textContent = "Invalid Height";
        patient.classList.add("invalid-patient");
    }
    
    if (isValidWeight && isValidWeight) {
        tdBmi.textContent = calculateBmi(weight, height);
    }
}

function calculateBmi(weight, height)  {
    var bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function isValidWeight(weight) {
    if (weight > 0 && weight < 500) {
        return true;
    } else {
        return false;
    }
}

function isValidHeight(height) {
    if (height > 0 && height < 2.50) {
        return true;
    } else {
        return false;
    }
}