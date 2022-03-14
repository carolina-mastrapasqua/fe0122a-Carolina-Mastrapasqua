var login= document.getElementById("login")

login.addEventListener("click",function(){

    var checkUser = localStorage.getItem('Users')
    var userObject = JSON.parse(checkUser)
    var userInserito = document.getElementById("Username").value
    var passwordInserita = document.getElementById("password").value
    let utenteEsistente=userObject.find(function(object){
     return object.username == userInserito && object.password == passwordInserita
   })
   if(utenteEsistente != undefined){
       alert("benvenuto")
   }
   else{
       alert("credenziali errate")
   }
   console.log(userObject)
    })   


