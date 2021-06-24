const heure = document.querySelector("#heures");
const minutes = document.querySelector("#minutes");
const secondes = document.querySelector("#secondes");
const buttonCalcul = document.querySelector("#btnCalcul");
const inputJour = document.querySelector("#inputJour");
const secondesParMinutes = 60;
const minutesParHeure = 60;
const heureParJour = 24;

buttonCalcul.addEventListener("click", () => {
  let jour = inputJour.value;
  let calcHeure = jour * heureParJour;
  let calcMinutes = calcHeure * minutesParHeure;
  let calcSecondes = calcMinutes * secondesParMinutes;

  heure.innerText = `${calcHeure} heure`;
  minutes.innerText = `${calcMinutes} Minutes`;
  secondes.innerText = `${calcSecondes} Secondes`;
});
