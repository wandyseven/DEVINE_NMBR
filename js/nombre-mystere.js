let nombreMystere = Math.floor(Math.random() * 100) + 1;
let nombreEssais = 0;
let limiteEssais = 10;
let nombreDevine = false;

const input = document.getElementById('user-input');
const resultatDisplay = document.querySelector('.text-resultat');
const boutonJouer = document.getElementById('jouer');

boutonJouer.addEventListener('click', () => {
    const saisie = parseInt(input.value, 10);

    // Vérifier si le jeu est terminé
    if (nombreDevine) {
        resultatDisplay.textContent = "Le jeu est terminé. Cliquez sur 'Rejouer' pour recommencer.";
        return;
    }

    // Vérifier si le joueur a dépassé le nombre d'essais
    if (nombreEssais >= limiteEssais) {
        resultatDisplay.textContent = `Perdu ! Vous avez atteint la limite d'essais. Le nombre mystère était ${nombreMystere}.`;
        return;
    }

    // Vérifier si la saisie est valide
    if (isNaN(saisie) || saisie < 1 || saisie > 100) {
        resultatDisplay.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
        return;
    }

    // Incrémenter le compteur d'essais
    nombreEssais++;

    if (saisie === nombreMystere) {
        resultatDisplay.textContent = `Bravo ! Vous avez trouvé le nombre mystère ${nombreMystere} en ${nombreEssais} essais.`;
        nombreDevine = true;
    } else if (saisie < nombreMystere) {
        resultatDisplay.textContent = "C'est plus !";
    } else {
        resultatDisplay.textContent = "C'est moins !";
    }

    if (nombreEssais === limiteEssais && !nombreDevine) {
        resultatDisplay.textContent = `Perdu ! Vous avez atteint la limite d'essais. Le nombre mystère était ${nombreMystere}.`;
    }

    input.value = "";
});
