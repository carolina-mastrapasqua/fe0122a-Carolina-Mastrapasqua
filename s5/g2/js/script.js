

let budget = 500;




while ( budget > 0)  {

    let spesa = Math.floor(Math.random()*50);
    budget -= spesa;
    document.getElementById("valori-budget").innerHTML = budget;
if (budget < 260 && budget > 250 ) {
    alert("Attenzione, sei già a metà del budget a disposizione!")
} else if (budget < 50) {
     alert("Ops! Hai quasi terminato il budget a disposizione :(")
} 

}


