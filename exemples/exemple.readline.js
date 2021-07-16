// récupération du module `readline`
var readline = require('readline');
  // création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({ input: process.stdin,
output: process.stdout
});
 /* // récupération de la saisie utilisateur
rl.question('Vous allez bien ? : ', function(saisie) { // la variable `saisie` contient la saisie effectuée
      console.log(`Vous avez saisi : ${saisie}`);
      rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
});*/
function test(){
  menu();
rl.setPrompt('OHAI> ');
rl.prompt();

rl.on('line', function(line) {
    choix = parseInt(line);
    switch(choix) {
        case 1:
            console.log('world!');
            break;
        case 2:
          console.log('Have a great day!');
    process.exit(0);
        default:
            console.log('Say what? I might have heard `' + line.trim() + '`');
        break;
    }
    menu();
    rl.prompt();
    
}).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
});
}

function menu(){
  console.log("\nListe des options: ")
  console.log("\t1-Lister les clients");
  console.log("\t2-Ajouter un client");
  console.log("\t3-Rechercher un client par nom");
  console.log("\t4-Vérifier la disponibilité d'une chambre");
  console.log("\t99-Sortir");
  
}
