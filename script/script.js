/*
Exercice 8:
Les habitants de Zorglub paient l’impôt selon les règles suivantes :
 les hommes de plus de 20 ans paient l’impôt
 les femmes paient l’impôt si elles ont entre 18 et 35 ans
 les autres ne paient pas d’impôt
Le programme demandera donc l’âge et le sexe du Zorglubien, 
et se prononcera donc ensuite sur le fait que l’habitant est imposable.
*/


//let age = 0;
/*et iIntervalAge_1= 0;
iIntervalAge_1+=iAge;
let iIntervalAge_2= 0;
iIntervalAge_2+=iAge;*/

//let bGenre = confirm("Êtes vous un Homme (OK)/ une Femme (Annuler)?");
//Algo pour savoir si vous êtes un homme et si vous êtes impossable
/*
if (bGenre == true) {
  alert("Vous êtes un Homme");
} else {
  console.log("Vous êtes une Femme");
  alert("Vous êtes une femme");
}

let iAge = parseInt(prompt("Entrer votre âge"));
age += iAge

if (age > 20) {
  sconsole.log("Vous êtes Imposable");
  alert("Vous êtes Imposable");
} else if (age <= 20) {
  console.log("Vous n'êtes pas Imposable");
  alert("Vous n'êtes pas Imposable");
}
*/
//Algo pour savoir si une femme est impossable
/*
else if (bGenre == false && age+iAge > 17 && age+iAge < 36) {
  console.log("Vous êtes Imposable");
  alert("Vous êtes Imposable");
} else {
  console.log("Vous n'êtes pas Imposable");
  alert("Vous n'êtes pas Imposable");
} */


// CORRRECTION LILYA


// Exercice 4
 
let age_4 =parseInt(prompt("Quel est votre âge ?"));
let sexe=(prompt("Quel est votre sexe? (homme, femmes"));
 
 
// vérifie si c'est un homme et qu'il à plus de 20 ans ou = à 20
if (age_4 >= 20 && sexe == "homme"){
   console.log(" Vous payer l'impôt car vous êtes un homme et qui à "  +  age_4 + "ans" );
}
// vérifie si c'est une femme et qu'elle est situé entre 18 et 35 ans
else if (age_4 >= 18 && age_4 <= 35 && sexe == "femme"){
    console.log("Vous payer l'impot car vous êtes une femme et qui a " + age_4 + "ans");
}
 
// tout le reste qui ne respect pas les conditions
else {
    console.log(" Vous ne payez pas d'impôt ");
}
 
 