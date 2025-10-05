/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

const averageJohn = Math.round((87 + 120 + 103) / 3 * 100) / 100; // 103.33
const averageMike = Math.round((116 + 93 + 123) / 3 * 100) / 100; // 110.67
const averageMary = Math.round((93 + 132 + 115) / 3 * 100) / 100; // 113.33

if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('L’équipe de John gagne avec un score moyen de ' + averageJohn + ' points.');
} else if (averageMike > averageJohn && averageMike > averageMary) {
    console.log('L’équipe de Mike gagne avec un score moyen de ' + averageMike + ' points.');
} else if (averageMary > averageJohn && averageMary > averageMike) {
    console.log('L’équipe de Mary gagne avec un score moyen de ' + averageMary + ' points.');
} else if (averageJohn === averageMike && averageJohn > averageMary && averageMike > averageMary) {
    console.log('Les équipes de John et de Mike sont ex æquos avec un score moyen de ' + averageJohn + ' points.');
} else if (averageMike === averageMary && averageMike > averageJohn && averageMary > averageJohn) {
    console.log('Les équipes de Mike et de Mary sont ex æquos avec un score moyen de ' + averageMike + ' points.');
} else if (averageJohn === averageMary && averageJohn > averageMike && averageMary > averageMike) {
    console.log('Les équipes de John et de Mary sont ex æquos avec un score moyen de ' + averageMary + ' points.');
} else {
    console.log('Les équipes de John, de Mike et de Mary sont toutes les 3 ex æquos avec un score moyen de ' + averageJohn + ' points.');
}