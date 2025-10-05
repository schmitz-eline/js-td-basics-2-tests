/*
TESTS - PRÉPA 4 : Ristourne

Un magasin fait 10% de réduction pour des achats dont le montant est supérieur à 50€
s’il y a au moins 3 enfants dans la famille ou si le montant des achats est supérieur à 125€.
Sinon, il fait 5% de réduction.

Attention, les ristournes ne sont pas cumulables.

Écrire un programme JS qui affiche le montant de la réduction accordée
sur base de la situation de l’acheteur et du montant de ses achats.

Valeurs de test :
- achat de 50 euros et moins de 3 enfants : 5% = 2.5€
- achat de 50 euros et 3 enfants : 5% = 2.5€
- achat de 60 euros et moins de 3 enfants : 5 % = 3€
- achat de 60 euros et 3 enfants : 10% = 6€
- achat de 125€ et moins de 3 enfants : 5 % = 6.25€
- achat de 125€ et 3 enfants : 10% = 12.5€
- achat de 126€ et moins de 3 enfants : 10 % = 12.6€
- achat de 126€ et 3 enfants : 10 % = 12.6€
*/

// 1. Demandez à l'utilisateur d'entrer le montant des achats.
// 2. Demandez à l'utilisateur d'entrer le nombre d'enfants dans la famille.
// 3. Initialisez une variable de réduction (discount) à 0.
// 4. Vérifiez si le montant des achats est supérieur à 50€.
// 5. Vérifiez si le nombre d'enfants est supérieur ou égal à 3.
// 6. Si l'une des conditions de l'étape 4 ou de l'étape 5 est vraie, attribuez 10% de réduction (discount = montant des achats * 0.1).
// 7. Sinon, attribuez 5% de réduction (discount = montant des achats * 0.05).
// 8. Affichez le montant de la réduction (discount) en euros dans la console.

const montant = parseFloat(prompt('Entrez le montant de vos achats.')).toFixed(2);
const nombreEnfants = parseInt(prompt('Combien avez-vous d’enfants ?'));
let discount;

if (montant > 50 || nombreEnfants >= 3) {
    discount = 0.1 * montant;
} else {
    discount = 0.05 * montant;
}

console.log('Vous obtenez une ristourne de ' + Math.round(discount * 100) / 100 + ' €.');