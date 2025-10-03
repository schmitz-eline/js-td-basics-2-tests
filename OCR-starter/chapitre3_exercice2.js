// Baccalauréat

/*
1. Stockez la moyenne du candidat (un nombre) dans une constante.
2. Écrivez un test qui affiche dans la console :
   - "Le candidat est recalé" si la moyenne est inférieure à 10.
   - "Le candidat est reçu" si la moyenne est entre 10 et 12.
   - "Le candidat est reçu avec mention" si la moyenne est supérieure ou égale à 12.
*/

// Exemple : si la moyenne du candidat est de 11, le programme devrait afficher "Le candidat est reçu."

// N'oubliez pas de tester votre programme avec différentes moyennes pour couvrir tous les cas de figure.

const average = 11;

if (average >= 0 && average < 10) {
    console.log('Le candidat est recalé avec une moyenne de ' + average + '. Il faut obtenir 10 pour être reçu');
} else if (average >= 10 && average <= 12) {
    console.log('Le candidat est reçu avec une moyenne de ' + average);
} else if (average > 12 && average <= 20) {
    console.log('Le candidat est reçu avec mention avec une moyenne de ' + average);
} else {
    console.log('La moyenne doit être comprise entre 0 et 20');
}