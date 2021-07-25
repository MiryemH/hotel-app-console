
const readline = require('readline');
const service = require('./service.js');


const rl = readline.createInterface(process.stdin,process.stdout);  
function choixOption() {
    menu();
    rl.setPrompt('Veuillez choisir une option: 1, 2, 3, 4 ou 99 ? >>> ');
    rl.prompt();
    rl.on('line', function(saisie) { 
        console.log("Votre choix est: "+ saisie);       
        switch (saisie.trim()){
            case "1": 
                console.log(">> Liste des clients");
                service.Service.listeClients();
                break;

            case "2":
                client1 = {
                    "id": 3,
                    "nom":"JEANPIERRE",
                    "prenom": "Laurent"
                };
                client2 = {
                    "id": 6,
                    "nom":"SALAMAH",
                    "prenom": "Nadeen"
                };
                console.log(">> Recherche de client:");
                service.Service.rechercherClient(client1).then((value) => console.log(value));
                service.Service.rechercherClient(client2).catch((value) => console.log(value));
                break;
                
            case "99": 
                console.log("Au revoir");
                rl.close();
                process.exit(0);
            default:
                  console.log("Choix invalid, Réessayer...");
                  break;
        }
        menu();
        rl.prompt();
    });
}
    

function menu(){
    console.log("\n\t***MENU****");
    console.log("\t1-Lister les clients");
    console.log("\t2-Rechercher un client par nom");
    console.log("\t99-Sortir");
    
}
exports.choixOption = choixOption;