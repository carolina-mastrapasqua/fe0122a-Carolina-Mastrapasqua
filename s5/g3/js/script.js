function mostraMenu() {
    let btn = document.getElementById("btn");
    let menuDropdown = document.querySelector(".lista");

    console.log(menuDropdown)

    if(btn.value == "open") {
        btn.value = "close"
        menuDropdown.classList.remove('nascosta');
    } else {
        btn.value = "open"
        menuDropdown.classList.add('nascosta')
    }
}

document.getElementById("btn").addEventListener('click', mostraMenu)


var bottoniProva = document.querySelectorAll('button')

bottoniProva.forEach(function(bottone){
    bottone.addEventListener('click', cambiaFont)
})


function cambiaFont() {
    var font = this.getAttribute("data-font")
    document.querySelector('p').style.fontSize = font;
}

