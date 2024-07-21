let professions = ["Rotular", "Trabajo con Pladur", "Encuadernar motos"]
let index = 0;

setInterval(function (){
    let changinText = document.getElementById("changing-text");
    changinText.textContent = professions[index];
    index = (index + 1) % professions.length;
}, 5000);
