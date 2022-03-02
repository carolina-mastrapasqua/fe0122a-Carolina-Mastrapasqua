let body = document.querySelector("body")
let scacchiera = document.createElement("div")
body.append(scacchiera);
scacchiera.classList.add("scacchiera")


for (var i= 0; i < 16; i++){
    let casella = document.createElement("div")
    scacchiera.append(casella)
    casella.classList.add("casella")
}


$(()=>{
    $(".scacchiera").css({
        "width" : "400px",
        "height" : "400px",
        "margin" : "auto",
        "border" : "2px solid black",
        "display": "flex",
        "flex-wrap": "wrap"
    })
    $(".casella").css({
        "width" : "100px",
        "height" : "100px",
        "box-sizing" : "border-box"
    })

    $(".casella").on({
        mouseenter: function(){
        $(this).css({
        "border-left": "2px solid blue",
         "border-top": "2px solid blue"
        })
        }, mouseleave: function(){
        $(this).css({
        "border": "none"
        })
        }, click: function (){
        $(this).css({
            "background-color" : "brown"
        })
        }, dblclick: function(){
            $(this).css({
        "background-color" : "black"
        })    
        }
    });

    $(".casella:first").click(function(){
        $(this).text("Epicode")
    })


    $(this).css({
        "border-left": "2px solid blue",
        "border-top": "2px solid blue"
    })


    $(".casella:nth(0), .casella:nth(2), .casella:nth(5), .casella:nth(7), .casella:nth(8),.casella:nth(10), .casella:nth(13), .casella:nth(15)").css({"background-color": "rgb(58, 56, 56)"});

    $(".casella:nth(1), .casella:nth(3), .casella:nth(4), .casella:nth(6), .casella:nth(9), .casella:nth(11),.casella:nth(12), .casella:nth(14)").css({"background-color" : "rgb(255, 255, 255)"})


})

