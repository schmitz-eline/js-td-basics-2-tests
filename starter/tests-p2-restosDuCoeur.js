/*
TESTS - PRÉPA 2 : Les restos du cœur

Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.

Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.

Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/

// 1. Demandez à l'utilisateur d'entrer le montant total des achats.
// 2. Vérifiez si le montant des achats est supérieur à 25€.
//    a) Si la condition est vraie, calculez la remise de 10% sur le montant total (0.1 * montant total).
//    b) Si la condition est fausse, la remise est de 0€.
// 3. Vérifiez si la remise est supérieure à 5€.
//    a) Si la condition est vraie, calculez la somme versée aux restos du cœur en prenant 10% de la remise (0.1 * remise).
//       Assurez-vous que le montant versé aux restos du cœur ne dépasse pas 2€ (utilisez Math.min(2, montant versé)).
//    b) Si la condition est fausse, la somme versée aux restos du cœur est de 0€.
// 4. Affichez la somme versée aux restos du cœur dans la console.

let montantTotal = prompt('Entrez le montant total de vos achats.');
const remise = 0.1 * montantTotal;
const montantVerse = 0.1 * remise;

if (montantTotal > 25) {
    montantTotal = montantTotal - remise;
    console.log('Vous obtenez une remise de 10%, soit de ' + Math.round(remise * 100) / 100 + ' €. La facture est de ' + Math.round(montantTotal * 100) / 100 + ' €.');
    if (remise > 5) {
        if (montantVerse >= 2) {
            console.log('2 € sont reversés aux restos du cœur.');
        } else {
            console.log('10% de la remise est reversé aux restos du cœur, soit ' + (Math.round(montantVerse * 100) / 100) + ' €.');
        }
    }
} else {
    console.log('La facture est de ' + Math.round(montantTotal * 100) / 100 + ' €.');
}