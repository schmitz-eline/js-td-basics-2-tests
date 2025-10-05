/*
TESTS - PRÉPA 5 : Bissextile

Écrire un programme qui teste si une année entrée par l’utilisateur est une année bissextile.

RAPPEL (en français) :
« Une année est bissextile si elle est multiple de 4, sauf pour les siècles non multiples de 400 »
OU
« Une année est bissextile si elle est divisible par 4 mais pas par 100 ou bien si elle est divisible par 400 »
AUTREMENT DIT :
1. Les années divisibles par 4 sont bissextiles, pas les autres
2. Exception : les années divisibles par 100 ne sont pas bissextiles
3. Exception à l'exception : les années divisibles par 400 sont bissextiles

Étapes :
1. Demandez à l'utilisateur d'entrer l'année à tester et stockez-la dans une variable year.
2. Initialisez une variable estBissextile à undefined.
3. Écrivez une série de tests pour vérifier si l'année est bissextile en suivant les règles données.
4. Si l'année est bissextile, affectez true à la variable estBissextile. Sinon, affectez false.
5. Affichez le résultat dans la console en fonction de la valeur  : "… est une année bissextile" ou "… est une année non bissextile".

N'oubliez pas de tester votre programme avec différentes années pour vérifier qu'il fonctionne correctement.
*/

const year = parseInt(prompt('Entrez une année.'));
let isLeap;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeap = true;
        } else {
            isLeap = false;
        }
    } else {
        isLeap = true;
    }
} else {
    isLeap = false;
}

if (isLeap) {
    console.log('L’année ' + year + ' est bissextile.');
} else {
    console.log('L’année ' + year + ' n’est pas bissextile.');
}