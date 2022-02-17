
var outcome = document.getElementById("outcome");

function showButton(button) {
    let buttonContent = button.id;
    outcome.innerHTML += buttonContent;
}

function cleanScreen() {
    outcome.innerHTML = '';
}

function total(){
   outcome.innerHTML = eval(outcome.innerHTML)
}



    
