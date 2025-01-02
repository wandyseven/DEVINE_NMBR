let nombreMystere = Math.floor(Math.random() * 100) + 1;

let nombreEssais = 0;
let limiteEssais = 10;
let nombreDevine = false;

const input = document.getElementById('user-input');
const resulDisplay = document.querySelector ('.text-resultat');


input.addEventListener('input', () => {


const saisie = parseInt(input.value, 10);

if (nombreDevine) {
  resulDisplay.textContent = "Le jeu est terminé"
  return;
}

if (nombreEssais >= limiteEssais) {
  resulDisplay.textContent = "Perdu ! Retentez"
  return;
}

if (isNaN(saisie)||saisie < 1|| saisie > 100) {
  resulDisplay.textContent = "Veuillez rentrer un nombre valide entre 1 et 100"
}

nombreEssais++

if (saisie === nombreMystere) {
  resulDisplay.textContent = "Bravo ! Vous avez trouvé le nombre ${nombreMystere}"
  nombreDevine = true;

} else if (saisie < nombreMystere) {
  resulDisplay.textContent = "C'est plus"

} else {
  resulDisplay.textContent = "C'est moins"
}

if (nombreEssais === limiteEssais && !nombreDevine) {
  resultDisplay.textContent = `Perdu ! Vous avez atteint la limite d'essais. Le nombre mystère était ${nombreMystere}.`;
}

 });



