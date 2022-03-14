searchID()

function searchID() {
    var params = new URLSearchParams(document.location.search);
    var idRicevuto = Number(params.get("id"));
    var ls = localStorage.getItem("Users");
    var db = JSON.parse(ls);

    var campi = document.querySelectorAll("input, select")
    var [nome, cognome, username, email, checkemail, password, checkpassword, city, address] = campi

    let utenteDaModificare = db.find(u => u.id == idRicevuto)

    nome.value = utenteDaModificare.nome
    cognome.value = utenteDaModificare.cognome
    username.value = utenteDaModificare.username
    email.value = utenteDaModificare.email
    checkemail.value = utenteDaModificare.checkemail
    password.value = utenteDaModificare.password
    checkpassword.value = utenteDaModificare.checkpassword
    city.value = utenteDaModificare.city
    address.value = utenteDaModificare.address

    var confermaModifica = document.getElementById("submit")

    confermaModifica.addEventListener("click", function(e) {
        e.preventDefault()
        salvaDB(utenteDaModificare, campi)
    })
}

function salvaDB(user, data) {
    var [nome, cognome, username, email, checkemail, password, checkpassword, city, address] = data
    let ls = localStorage.getItem("Users");
    let db = JSON.parse(ls);

    // var indexElement = db.indexOf(user)

    var indexElement = db.findIndex(u => u.id == user.id)

    user.nome = nome.value
    user.cognome = cognome.value
    user.username = username.value
    user.email = email.value
    user.checkemail = checkemail.value
    user.password = password.value
    user.checkpassword = checkpassword.value
    user.city = city.value
    user.address = address.value

    db.splice(indexElement, 1, user);
    localStorage.setItem("Users", JSON.stringify(db));
}