class utente {
    constructor(nome, cognome, username, email, checkemail, password, checkpassword,
        city, address) {
        this.id = (()=>{
            let ls = localStorage.getItem('ID')
            var registeredID = ls ? Number(ls)+1 : 0
            localStorage.setItem('ID',registeredID);
            return registeredID
        })() //una funzione autoinvocata che restituisce id alla propieta id e l'id deve essere salvato in LS    
        this.nome = nome;
        this.cognome = cognome;
        this.username = username;
        this.email = email;
        this.checkemail = checkemail;
        this.password = password;
        this.checkpassword = checkpassword;
        this.city = city;
        this.address = address;
        
    }
}

var btn = document.getElementById("submit")



btn.addEventListener("click", function(e) {
    e.preventDefault()
    

    var nameUtente = document.getElementById("name")
    var surname = document.getElementById("surname")
    var username = document.getElementById("username")
    var emailInserita = document.getElementById("email")
    var checkemail = document.getElementById("check-email")
    var password = document.getElementById("password")
    var checkpassword = document.getElementById("check-password")
    var city = document.getElementById("city")
    var address = document.getElementById("address")

    


    //VALIDAZIONE FORM
    var validato=true
    var textValid = /^([a-zA-Z])+$/
    if (nameUtente.value == "") {
        nameUtente.addEventListener("mouseover", function(){
        document.getElementById("inserimento-nome").classList.remove("nascosto")
        }) 
        //alert("Devi inserire un nome");
        nameUtente.style.border = "1px solid red"
        nameUtente.focus();
        validato=false
        
    } else if (!textValid.test(nameUtente.value)) {
        //alert("Il nome può contenere solo lettere");
        document.getElementById("nome-erroreLettere").classList.remove("nascosto")
        nameUtente.style.border = "1px solid red"
        nameUtente.focus();
        validato=false
    }

    if (surname.value == "") {
        //alert("Devi inserire un cognome");
        document.getElementById("inserimento-cognome").classList.remove("nascosto")
        surname.style.border = "1px solid red"
        surname.focus();
        validato=false
    } else if (!textValid.test(surname.value)) {
        document.getElementById("cognome-erroreLettere").classList.remove("nascosto")
        //alert("Il cognome può contenere solo lettere");
        surname.style.border = "1px solid red"
        surname.focus();
        validato=false
    }

    if (username.value == "") {
        //alert("Devi inserire un username");
        username.style.border = "1px solid red"
        username.focus();
        validato=false
    }

    var emailValid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    if (!emailValid.test(emailInserita.value) || emailInserita.value == "") {
        //alert("Devi inserire un indirizzo email corretto");
        email.style.border = "1px solid red"
        emailInserita.focus();
        validato=false
    }

    if (checkemail.value == "") {
        //alert("Devi confermare l'email");
        checkemail.style.border = "1px solid red"
        checkemail.focus();
        validato=false
    }
    if (emailInserita.value != checkemail.value) {
        //alert("La conferma email non è corretta");
        emailInserita.style.border = "1px solid red"
        checkemail.style.border = "1px solid red"
        checkemail.focus();
        validato=false
    }

    if (password.value.length < 8 || password.value == "") {
        //alert("Scegli una password, minimo 8 caratteri");
        password.style.border = "1px solid red"
        password.focus();
        validato=false
    } else if (password.value == nameUtente.value || password.value == surname.value) {
        //alert("La password non può contenere il nome o il cognome");
        password.style.border = "1px solid red"
        password.focus();
        validato=false
    }

    if (checkpassword.value == "") {
        //alert("Devi confermare la password");
        checkpassword.style.border = "1px solid red"
        checkpassword.focus();
        validato=false
    }
    if (password.value != checkpassword.value) {
        //alert("La conferma password non è corretta");
        checkpassword.style.border = "1px solid red"
        checkpassword.focus();
        validato=false
    }

    if (city.value == "") {
        //alert("Devi inserire una città");
        city.style.border = "1px solid red"
        city.focus();
        validato=false
    }

    if (address.value == "") {
        //alert("Devi inserire un indirizzo");
        address.style.border = "1px solid red"
        address.focus();
        validato=false
    }
    if(validato){
    /*
    document.querySelectorAll("input").style.borderTop = "0px"
    document.querySelectorAll("input").style.borderLeft ="0px"
    document.querySelectorAll("input").style.borderRight ="0px"
    
    document.querySelectorAll("span").classList.add("nascosto")  
    */
    var nUser = new utente(nameUtente.value, surname.value, username.value, emailInserita.value, checkemail.value, password.value, checkpassword.value,
        city.value, address.value)
    salvaDB(nUser)}


})

function salvaDB(nUser) {
    var emailInserita = document.getElementById("email").value
    var ls = localStorage.getItem('Users')
    var registeredUsers = ls ? JSON.parse(ls) : []
    let emailEsistente= registeredUsers.find(function(object){
        return object.email == emailInserita
        
    })
    if(emailEsistente != undefined){
      alert("email gia presente")
        return false
    }
    else{
        registeredUsers.push(nUser)
        localStorage.setItem('Users', JSON.stringify(registeredUsers));
        return true
    }
    

}

function salvaID(){
    
    let ls = localStorage.getItem('ID')
    var registeredID = ls ? ls+1 : 0
    localStorage.setItem('ID',registeredID);

}

