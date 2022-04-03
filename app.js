
// constructor => initialiser les variables par défaut au démarrage

// on définit une fonction avec des propriétés pour éviter de dupliquer plusieurs fois le meme code

/* objet constructor function*/
function Voiture(marque,modele, annee){
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    // fonction compteur km
    this.i = 0;
    this.compteurkm = function() {
        return this.i++;
    }
    // fonction initialiser compteur 
    this.initCompteur = function(km) {
        return this.i = km;
    }
}
// on crée un nouvel objet en utilisant le constructor
let voiture1 = new Voiture("Renault","Twingo",2000);
voiture1.initCompteur(1000)
let voiture2 = new Voiture("Citroen","Picasso",2004);
voiture2.initCompteur(5000)
// on affiches la marque de chaque voiture
console.log(`marque ${voiture1.marque}`);
console.log(`marque ${voiture2.marque}`);

console.log("-------------------------");

// on affiches le nombre de km de la voiture 1
console.log(`compteurkm ${voiture1.compteurkm()}`);
console.log(`compteurkm ${voiture1.compteurkm()}`);
console.log(`compteurkm ${voiture1.compteurkm()}`);
console.log(`compteurkm ${voiture1.compteurkm()}`);

console.log("-------------------------");

// on affiches le nombre de km de la voiture 2
console.log(`compteurkm ${voiture2.compteurkm()}`);
console.log(`compteurkm ${voiture2.compteurkm()}`);
console.log(`compteurkm ${voiture2.compteurkm()}`);
console.log(`compteurkm ${voiture2.compteurkm()}`);
