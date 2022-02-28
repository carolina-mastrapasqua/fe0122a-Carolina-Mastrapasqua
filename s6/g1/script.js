// Quando il documento è pronto...

    //gestisco il click sul pulsante Iscriviti
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 

$(document).ready(function(){


    $("#iscr-news").click(function() {
        let nomeContenitore = $("#nome").val();
        if (nomeContenitore) {
            $("#nome").next().text("*")
        } else {
            $("#nome").next().text("*Richiesto")
        }
    });

    $("#iscr-news").click(function(){
        let emailContenitore = $("#email-1").val();
        if (emailContenitore) {
            $("#email-1").next().text("*")
        } else {
            $("#email-1").next().text("*Richiesto")
        }
    })

    $("#iscr-news").click(function(){
        let emailContenitore = $("#email-2").val();
        if (emailContenitore) {
            $("#email-2").next().text("*");
        } else {
            $("#email-2").next().text("*Richiesto")
        }
    })

    $("#pulisci-form").click(function(){
        let contenitori = $("#nome, #email-1, #email-2");
        contenitori.val("");
        contenitori.next().text("*");
    })
});