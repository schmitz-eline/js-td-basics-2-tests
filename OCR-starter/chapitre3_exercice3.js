// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

second += 1;
if (second === 60) {
    second = 0;
    minute += 1;
    if (minute === 60) {
        minute = 0;
        hour += 1;
        if (hour === 24) {
            hour = 0;
        }
    }
}

console.log('Il est ' + hour + 'h, ' + minute + 'm et ' + second + 's');