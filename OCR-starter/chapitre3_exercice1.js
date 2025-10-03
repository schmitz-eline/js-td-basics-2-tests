// Jour suivant

/*
1. Stockez le jour actuel (nom du jour, type texte) dans une constante.
2. Écrivez des tests pour stocker dans une variable le nom du jour suivant dans chaque cas de figure :
   - Si le jour actuel est "lundi", alors le jour suivant est "mardi".
   - Si le jour actuel est "mardi", alors le jour suivant est "mercredi".
   - Si le jour actuel est "mercredi", alors le jour suivant est "jeudi".
   - Si le jour actuel est "jeudi", alors le jour suivant est "vendredi".
   - Si le jour actuel est "vendredi", alors le jour suivant est "samedi".
   - Si le jour actuel est "samedi", alors le jour suivant est "dimanche".
   - Si le jour actuel est "dimanche", alors le jour suivant est "lundi".
   - Si le jour actuel ne correspond à aucun des jours de la semaine, affichez dans la console "Erreur : jour non reconnu!"
3. Testez si la variable qui contient le nom du jour suivant n'est pas vide, et dans ce cas, affichez dans la console le message "Demain, nous serons …" suivi du nom du jour suivant.
*/

// Exemple : si le jour actuel est "mardi", le programme devrait afficher "Demain, nous serons mercredi."

// N'oubliez pas de tester votre programme avec divers jours de la semaine.

const weekDays = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

const currentIndex = new Date().getDay() - 1;
// Pour obtenir l'indice du jour actuel. On fait -1, car les américains commencent par dimanche, or, on veut commencer par lundi (indice 0).

const currentDay = weekDays[currentIndex];

const nextIndex = (currentIndex + 1) % weekDays.length;
// On fait %7 pour que quand on arrive à dimanche (indice 6, auquel on ajoute 1), on retourne à lundi (indice 0 = reste de la division de 7 par 7).

const nextDay = weekDays[nextIndex];

if (nextDay !== '') {
    if (currentIndex < 0 || currentIndex > 6) {
        console.log('Erreur : jour non reconnu !');
    }

    if (
        currentDay !== weekDays[0] &&
        currentDay !== weekDays[1] &&
        currentDay !== weekDays[2] &&
        currentDay !== weekDays[3] &&
        currentDay !== weekDays[4] &&
        currentDay !== weekDays[5] &&
        currentDay !== weekDays[6] &&
        typeof currentDay !== 'string'
    ) {
        console.log(currentDay + ' n’est pas un jour de la semaine');
    } else {
        console.log('Aujourd’hui, nous sommes ' + currentDay);
        console.log('Demain, nous serons ' + nextDay);
    }
}