var numero = 10;
console.log(numero);

{
    
    const inizioDialogo = "inizio dialogo" ;
    console.log(inizioDialogo);
    let domanda = "Come va?";
    domanda = "Come va a lavoro?";
    console.log("domanda in let: " + domanda);
    let risposta = "Molto bene!";
    console.log ("risposta in let: " + risposta);
}

/*console.log("valore di risposta fuori: " + risposta); errore in console perchè
let non è definita fuori da scope*/


domanda = "come stai?";
console.log(domanda);

const fineDialogo = "fine dialogo";
console.log(fineDialogo);

/*fineDialogo = "ciao!";
console.log(fineDialogo);*/ 

var numero1 = 7;
var numero2 = 3;
var risultato = numero1 + numero2;
console.log(risultato);

/*numero1 += numero2;
console.log(numero1);

numero1 *= numero2;
console.log(numero1);

var risultato1 = numero1 - numero2;
console.log(numero1 - numero2);*/
 
var numero3 = 10;

document.write(numero1 + " sommato a " + numero2 + " fa: " + numero3);

12 == 12; //true
20 > 12; // true
20 > 12; //false
20 == 12 && 13 == 6; //false
18 > 9 || 6 < 3; //true
! (numero1 > numero2); //false
! (risultato < numero1); //true



var saluto = "Ehi"
var risposta1;
console.log(risposta1);

var risposta1 = false;

console.log(risposta1 + ' ' + saluto);

function bottoneInterattivo()
{
    document.getElementById("btnInterattivo").value = "Grazie!";
    document.getElementById("btnInterattivo").style.backgroundColor = "red";
}




















