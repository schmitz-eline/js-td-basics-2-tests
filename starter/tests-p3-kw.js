/*
TESTS - PRÉPA 3 : kw

Écrire un programme JS qui calcule le coût d’une consommation électrique.
L’utilisateur entre le nombre de KW consommés.
Les 30 premiers KW sont à 25 centimes le KW
Les 31 à 50èmes KW sont à 20 centimes le KW
Les 51 à 70èmes KW sont à 15 centimes le KW
Les KW suivants sont à 10 centimes le KW

Valeurs de test :
- 30 KW => 750 centimes = 7.5 €
- 31 KW => 30 * 25 + 1 * 20 = 770 centimes = 7.7 €
- 40 KW => 30 * 25 + 10 * 20 = 750 + 200 = 950 centimes = 9.5 €
- 50 KW => 30 * 25 + 20 * 20 = 750 + 400 = 1150 centimes = 11.5 €
- 51 KW => 30 * 25 + 20 * 20 + 1 * 15 = 750 + 400 + 15 = 1165 centimes = 11.65 €
- 60 KW => 30 * 25 + 20 * 20 + 10 * 15 = 750 + 400 + 150 = 1300 centimes = 13 €
- 70 KW => 30 * 25 + 20 * 20 + 20 * 15 = 750 + 400 + 300 = 1450 centimes = 14.5 €
- 71 KW => 30 * 25 + 20 * 20 + 20 * 15 + 1 * 10 = 750 + 400 + 300 + 10 = 1460 centimes = 14.6 €
- 80 KW => 30 * 25 + 20 * 20 + 20 * 15 + 10 * 10 = 750 + 400 + 300 + 100 = 1550 centimes = 15.5 €
*/

// 1. Demandez à l'utilisateur d'entrer le nombre de KW consommés.
// 2. Initialisez une variable cost à 0 pour stocker le coût total.
// 3. Vérifiez combien de KW sont compris dans la tranche de 30 KW.
// 4. Calculez le coût de cette tranche (KW dans la tranche * 25 centimes) et ajoutez-le à cost.
// 5. Répétez les étapes 3 et 4 pour les tranches de 31 à 50 KW (20 centimes), de 51 à 70 KW (15 centimes), et les KW restants (10 centimes).
// 6. Affichez le coût total (cost) en euros dans la console.

const consommation = parseInt(prompt('Entrez le nombre de KW consommés.'));
let cost = 0;

if (consommation >= 1 && consommation <= 30) {
    cost = consommation * 0.25;
} else if (consommation >= 31 && consommation <= 50) {
    cost = 30 * 0.25 + (consommation - 30) * 0.20;
} else if (consommation >= 51 && consommation <= 70) {
    cost = 30 * 0.25 + 20 * 0.20 + (consommation - 50) * 0.15;
} else {
    cost = 30 * 0.25 + 20 * 0.20 + 20 * 0.15 + (consommation - 70) * 0.10;
}

console.log('Le coût total est de ' + Math.round(cost * 100) / 100 + ' €.');

// TODO : Refaire avec l'opérateur % pour ne pas avoir de répétition de code