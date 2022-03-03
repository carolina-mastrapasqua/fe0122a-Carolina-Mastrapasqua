

    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];
    
    
            
        $(document).ready(function(){

        $ ("h2").hide()
        $("#memory").hide()
        $("#timer").hide()
        $("#starter").click(function(){
            $ ("h2").show()
            $("#memory").show()
            $("#timer").show()
            $("#starter").text("completa il gioco nel minor numero di click possibile").css("height", "40px")
            let now = new Date();
           now.setHours(0)
           now.setMinutes(0)
           now.setSeconds(0)


            setInterval(function(){
                var h = now.getHours();
                var m = now.getMinutes();
                var s = now.getSeconds();

                now.setSeconds(s+1)

                h = now.getHours();
                m = now.getMinutes();
                s = now.getSeconds();

                $("#timer").text(h+ ':'+m+':'+s)
                

            },1000)
        })

        
        

            for(i=0; i < 16; i++){

                let nRandom = Math.floor(Math.random()*mieImg.length);
                let immagineRandom = mieImg.splice(nRandom, 1)
                var card = $("<div></div>")
                card.addClass("images").attr("id", "emoji"+i)
                $("#memory").append(card)
                var img = $("<img>")
                img.attr({
                    "id": i,
                    "src": "img/" + immagineRandom + ".png"
                })
                card.append(img)
            }

            let imgClicked = []
            let isRunningAnimation = false


            $(".images").click(function(){
                    let click = $("#clicks").text()
                    click++
                    $("#clicks").text(click)  

                
                    if(imgClicked.length < 2){
                        let imgId = $(this).children().attr('id')
                        let imgSrc = $(this).children().attr('src')

                        let imgObject = {
                        id: imgId,
                        src: imgSrc
                        } 
                        $('#'+imgId).show()
                        imgClicked.push(imgObject)
                    }

                    if(imgClicked.length == 2 && !isRunningAnimation){

                        if(imgClicked[0].src == imgClicked[1].src){
                            imgClicked = []
                        } else {
                            isRunningAnimation = true
                            setTimeout(function(){
                            $('#'+imgClicked[0].id).hide()
                            $('#'+imgClicked[1].id).hide()
                            imgClicked = []
                            isRunningAnimation = false
                        },300)
                        }       
                    }
            })
        })

            
    
           
        
    


       
        
    
            
                
               
                
        
    
        
                   
                
                    //usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare 
                    //le carte che ha scoperto prima che queste scompaiano
