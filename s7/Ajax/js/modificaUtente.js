var params = new URLSearchParams(document.location.search);
var idRicevuto = Number(params.get("id"));
var campi = document.querySelectorAll("input")
var [nome, cognome, email, role] = campi

aggiungiValori()
searchID()

function searchID() {

    var confermaModifica = document.getElementById("submit")

    confermaModifica.addEventListener("click", function() {

        fetch(
            'https://sofin.wp-admin.it/public/api/v1/user/' + idRicevuto, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: idRicevuto,
                    name: nome.value,
                    lastname: cognome.value,
                    email: email.value,
                    password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
                    role_id: role.value
                }),
            }
        )

    })
}

function aggiungiValori() {
    fetch("https://sofin.wp-admin.it/public/api/v1/user")
        .then(response => response.json())
        .then(data => {
            let userAttuale = data.find(element => {
                return element.id == idRicevuto
            })

            for (key in userAttuale) {
                nome.value = userAttuale.name
                cognome.value = userAttuale.lastname
                email.value = userAttuale.email
                role.value = userAttuale.role_id
            }
        })
}