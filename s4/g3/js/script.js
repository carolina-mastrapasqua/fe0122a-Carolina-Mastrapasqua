function range(a, b)
{   
    c = a - b;
    if (c < 1000, c != 1) {
        console.log("Le case più economiche")
    } 
    else if (c == 1) {
        alert("Ops! Non ci sono case da mostrare") 
    }
    else {
        console.log("Le altre case")
    }
return c;
}

range(1000,999);

//console.log(range(10,4));
//console.log(range(3000,150));


/*function arrow(numero1, numero2) 
{       
    return numero1 * numero2 
}

console.log(arrow(6,3));*/


freccia = (numero1, numero2) => numero1 * numero2;
console.log(freccia(3,6));

function outside()
{ var e = 10;
    function inside()
    {
        return e + e;
    }
return inside();
}

console.log(outside());
