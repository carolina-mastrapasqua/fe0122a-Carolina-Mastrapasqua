// Quando il documento è pronto...

    // collega i gestori evento per il click per tutti i tag h2.
    
        // crea una variabile ed immagazzina al suo interno il tag h2 che inizializza l'evento (usa .currentTarget).
        
        
        // attiva la classe .meno dei CSS sul tag h2.
        

        // mostra o nascondi il div, utilizza un if-else.
        

        // utilizza il prepreventDefault() per prevenire che il gestore eventi di default sia eseguito.
    

    // imposta il focus sul primo tag ancor dell'h2



    $(document).ready(function(){
        let currentTarget = $("h2");  
                $("h2").on("click",function(){
                $(this).toggleClass("meno")
               
                if($(this).hasClass("meno") ){
                    $(this).next().show()
                } else{
                    $(this).next().hide()
                }
            })

        $("a:first").focus();
        
        })


       /* $("h2").click(function(){
            $(this).toggleClass("menu")
            $(this).next().toggle()
        }) */






