let nombreSecret = Math.floor(Math.random() * 100) + 1;
let essais = 0;
let spanEssais = document.getElementById("essais");
let btnRestart = document.getElementById("rejouer");
    
function verifier() {
    let valeur = document.getElementById("guess").value;
    essais++;
    spanEssais.textContent = essais;
    console.log("nombreSecret =",nombreSecret)
    if(valeur === ""){
        alert("Veuillez entrer un nombre !")
    } 

    else if (valeur == nombreSecret) {
        document.getElementById("resultat").textContent = 
            `Bravo 🏆 ! Tu as trouvé en ${essais} essais.`;
        btnRestart.style.display = "block";
    } 
    else if (valeur < nombreSecret) {
        document.getElementById("resultat").textContent = "📈 Trop petit ! Essaie encore.";
    } 
    else {
        document.getElementById("resultat").textContent = "📉 Trop grand ! Essaie encore.";
    }
}



function resetGame() {
    document.getElementById("guess").value = "";
    document.getElementById("resultat").textContent = "";
    nombreSecret = Math.floor(Math.random() * 100) + 1;
    essais = 0;
    spanEssais.textContent = essais;
    btnRestart.style.display = "none";
    return;
}