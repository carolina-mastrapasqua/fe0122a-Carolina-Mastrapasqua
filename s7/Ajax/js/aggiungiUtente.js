var campi = document.querySelectorAll("input")
var [nome, cognome, email, role] = campi
var btnAdd = document.querySelector("button")
btnAdd.addEventListener("click", function() {
    fetch(
        'https://sofin.wp-admin.it/public/api/v1/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nome.value,
                lastname: cognome.value,
                email: email.value,
                password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
                role_id: role.value
            }),
        }
    )
})