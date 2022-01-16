var searchButton = document.querySelector("#fetch-patients");

searchButton.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var ajaxError = document.querySelector("#ajax-error");

        if (xhr.status == 200) {
            ajaxError.classList.add("hidden");
            var patients = JSON.parse(xhr.responseText);

            patients.forEach(function(patient) {
                addPatientOnTable(patient);
            });
        } else {
            ajaxError.classList.remove("hidden");
        }
    });

    xhr.send();
})