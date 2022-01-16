var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#add-form");
    var patient = getPatientFromForm(form);
    var patientTr = createTr(patient);
    var errors = validatePatient(patient);

    if (errors.length > 0) {
        showErrorMessages(errors);
        return;
    }

    addPatientOnTable(patient);

    form.reset();
    var errorMsgs = document.querySelector("#error-messages");
    errorMsgs.innerHTML = "";

});

function addPatientOnTable(patient) {
    var patientTr = createTr(patient);
    var table = document.querySelector("#patients-table");
    table.appendChild(patientTr);
}

function showErrorMessages(errorMsgs) {
    var ul = document.querySelector("#error-messages")
    ul.innerHTML = "";

    errorMsgs.forEach(function(errorMsg) {
        var li = document.createElement("li");
        li.textContent = errorMsg;
        ul.appendChild(li);
    });
}

function getPatientFromForm(form) {
    
    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calculateBmi(form.weight.value, form.height.value)
    }

    return patient;
}

function createTr(patient) {
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    var nameTd = createTd(patient.name || patient.nome, "name-info");
    var weightTd = createTd(patient.weight || patient.peso, "weight-info");
    var heightTd = createTd(patient.height || patient.altura, "height-info");
    var fatTd = createTd(patient.fat || patient.gordura, "fat-info");
    var bmiTd = createTd(patient.bmi || patient.imc , "bmi-info");

    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(bmiTd);

    return patientTr;
}

function createTd(patientData, dataClass) {
    var td = document.createElement("td");
    td.textContent = patientData;
    td.classList.add(dataClass);

    return td;
}

function validatePatient(patient) {

    var errorMsgs = [];

    if (patient.name.length == 0) {
        errorMsgs.push("Name cannot be empty!");
    }

    if (patient.weight.length == 0) {
        errorMsgs.push("Weight cannot be empty!");
    } else if (!isValidWeight(patient.weight)) {
        errorMsgs.push("Invalid weight!");
    }

    if (patient.height.length == 0) {
        errorMsgs.push("Height cannot be empty!");
    } else if (!isValidHeight(patient.height)) {
        errorMsgs.push("Invalid height!");
    }

    if (patient.fat.length == 0) {
        errorMsgs.push("Fat cannot be empty!");
    }
    

    return errorMsgs;

}