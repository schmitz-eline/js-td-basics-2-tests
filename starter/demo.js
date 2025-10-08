//
const nbBieres = 0;
const ageJohn = 15;
const boissonJohn =  ageJohn >= 18 ? 'bières' : 'jus';
if (nbBieres > 1) {
    console.log(`John boit ${nbBieres} bière`);
} else {
    console.log(`John boit ${nbBieres} bièrs`);
}
// ou : opérateur ternaire
console.log(`John boit ${nbBieres} bière${nbBieres > 1 ? 's' : ''}`);
console.log(`John boit des ${boissonJohn}`);

//
const job = 'instituteur';
if (job === 'instituteur') {
    console.log('John enseigne la programmation aux enfants.');
} else if (job === 'chauffeur') {
    console.log('John conduit un taxi à Lisbonne.');
} else if (job === 'designer') {
    console.log('John conçoit de beaux sites web.');
} else {
    console.log('John fait autre chose.');
}
// ou : switch (avec break)
switch (job) {
    case 'instituteur':
        console.log('John enseigne la programmation aux enfants.');
        break;
    case 'chauffeur':
        console.log('John conduit un taxi à Lisbonne.');
        break;
    case 'designer':
        console.log('John conçoit de beaux sites web.');
        break;
    default:
        console.log('John fait autre chose.');
}
// ou : switch (sans break)
const ageEline = 10;
switch (ageEline) {
    case 1:
    case 2:
    case 3:
        console.log('Tu as 1, 2 ou 3 ans.');
        break;
    case 10:
    case 11:
        console.log('Tu as 10 ou 11 ans.');
}

//
const ageOfJohn = 56;
if (ageOfJohn < 13) {
    console.log('John est un petit garçon.');
} else if (ageOfJohn >= 13 && ageOfJohn <= 20) {
    console.log('John est un adolescent.');
} else if (ageOfJohn > 20 && ageOfJohn <= 30) {
    console.log('John est un jeune homme.');
} else {
    console.log('John est un homme.');
}
// ou
switch (true) {
    case ageOfJohn < 13:
        console.log('John est un petit garçon.');
        break;
    case ageOfJohn >= 13 && ageOfJohn <= 20:
        console.log('John est un adolescent.');
        break;
    case ageOfJohn > 20 && ageOfJohn <= 30:
        console.log('John est un jeune homme.');
        break;
    default:
        console.log('John est un homme.');
}

//
const meteo = prompt('Quel temps fait-il ajd ? Répondez par : soleil, vent, pluie, neige');
switch (meteo) {
    case 'soleil':
        console.log('sortez en t-shirt.');
        break;
    case 'vent':
        console.log('sortez en pull.');
        break;
    case 'pluie':
        console.log('sortez en veste.');
        break;
    case 'neige':
        console.log('restez au chaud à la maison.');
        break;
    default:
        console.log('je n’ai pas compris');
}

//
const jourSemaine = parseInt(prompt('Entrez le numéro du jour de la semaine'));
console.log('Les jours suivants se sont déjà écoulés depuis le début de la semaine : ');
switch (jourSemaine) {
    case 7:
        console.log('dimanche');
    case 6:
        console.log('samedi');
    case 5:
        console.log('vendredi');
    case 4:
        console.log('jeudi');
    case 3:
        console.log('mercredi');
    case 2:
        console.log('mardi');
    case 1:
        console.log('lundi');
        break;
    default:
        console.log('Ce n’est pas un jour de la semaine');
}