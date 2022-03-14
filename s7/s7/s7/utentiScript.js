creaUtenti()



function creaUtenti() {
    var divPosizione = document.getElementById("contenitoreUtenti")
    var checkUser = localStorage.getItem('Users')
    var userObject = JSON.parse(checkUser)
     var table = document.createElement("table")
        divPosizione.prepend(table)
        var tableCreata = document.querySelector("table")
        var theadCreata = document.createElement("thead")
        tableCreata.prepend(theadCreata)
        var thead = document.querySelector("thead")
        for (key in userObject[0]){
            thead.innerHTML += key +" "
            
        }
        

    userObject.forEach(function(element) {
        
        
        
        /*var tableCaption = document.createElement("caption")
        tableCreata.prepend(tableCaption)
        document.querySelector("caption").innerHTML = element.username + "-" + element.id*/
        var tr = document.createElement("tr")
        tableCreata.prepend(tr)
        for (key in element) {
            document.querySelector("tr").innerHTML += element[key] + " "
        }
        var trCreato = document.querySelector("tr")
        var deleteButton = document.createElement("button")
        var modificaButton = document.createElement("a")
        deleteButton.innerHTML = "Delete"
        modificaButton.innerHTML = "Change"
        trCreato.append(deleteButton,modificaButton)
        deleteButton.addEventListener("click", function() {
            tr.remove()
            deleteDB(element)
        })
        var idChange=element.id
        modificaButton.addEventListener("click",function(){
        modificaButton.setAttribute("href","modificaUtenti.html?id="+idChange)
        modificaButton.setAttribute("target","_blank")
        })
        
        
    })
}



function deleteDB(user) {
    let ls = localStorage.getItem("Users");
    let db = JSON.parse(ls);
    let indiceElemento = db.find(function(el) {
        return user.id == el.id
    })
    
    var indexElement = db.indexOf(indiceElemento)
    db.splice(indexElement, 1);
    localStorage.setItem("Users", JSON.stringify(db));

}



