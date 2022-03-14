fetch("https://sofin.wp-admin.it/public/api/v1/user")
    .then(response => response.json())
    .then(data => {
        //faccio cose
        var tbody = document.querySelector("#tabella-users tbody")
        let campiMostrati = ["id", "name", "lastname", "email", "password", "role"]
        data.forEach(element => {
            var tr = document.createElement("tr")
            tbody.append(tr)
            for (key in element) {
                if (campiMostrati.includes(key)) {
                    let td = document.createElement("td")
                    let contenuto = key == "role" ? element.role.name : element[key]
                    td.innerHTML = contenuto
                    tr.append(td)
                }
            }
            var btnDel = document.createElement("button")
            var btnMod = document.createElement("a")
            btnDel.innerHTML = "Rimuovi"
            btnMod.innerHTML = "Modifica"
            tr.append(btnDel)
            tr.append(btnMod)
            btnDel.addEventListener("click", function() {
                tr.remove()
                deleteDb(element, data)
            })
            var idChange = element.id
            btnMod.addEventListener("click", function() {
                btnMod.setAttribute("href", "modificaUtente.html?id=" + idChange)
                btnMod.setAttribute("target", "_blank")
            })
        })
    })


function deleteDb(user, pippo) {
    var indiceElemento = pippo.find(function(el) {
        return user.id == el.id
    })

    fetch(
        'https://sofin.wp-admin.it/public/api/v1/user/' + indiceElemento.id, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}