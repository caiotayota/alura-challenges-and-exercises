var filterField = document.querySelector("#filter-table");

filterField.addEventListener("input", function() {
    var patients = document.querySelectorAll(".patient");

    if (this.value.length > 0) {
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            var tdName = patient.querySelector(".name-info");
            var name = tdName.textContent;
            var regex = new RegExp(this.value, "i");

            if (regex.test(name)) {
                patient.classList.remove("hidden");
            } else {
                patient.classList.add("hidden");
            }
        }
    } else {
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            patient.classList.remove("hidden");
        }
    }
});