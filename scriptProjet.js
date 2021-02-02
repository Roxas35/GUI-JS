//On démarre toujours par :

'use strict';

//Vous avez fais un projet personnel en C puis vous l'avez converti en Python, puis en Python avec un GUI et bien vous les transposez votre code en JS... Plus tard vous ferez le GUI

//Rendez-vous avec le médecin

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.start').addEventListener('click', function () {
    let h1 = document.querySelector('.Rendez-vous1').value;
    let m = document.querySelector('.Rendez-vous2').value;
    let j = document.querySelector('.Rendez-vous3').value;
    let h2 = document.querySelector('.Rendez-vous4').value;
    let sortie = document.querySelector('#Sortie');

    if (h2 === h1) {
      sortie.value = "Vous êtes à l'heure du rendez-vous avec votre médecin";
    } else if (h1 < h2) {
      sortie.value = 'RDV manqué avec le médecin';
    } else if (h1 > h2) {
      sortie.value = `Vous êtes en avance de : ${h1 - h2}h`;
    }
  });
});

//Précision taper simplement un entier quand on vous demande de taper quelque chose sur la console autrement il ne fonctionnera pas.
