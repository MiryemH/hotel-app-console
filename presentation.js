var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);  
function choixOption() {
    menu();
    rl.setPrompt('Veuillez choisir une option: 1, 2, 3, 4 ou 99 ? >>> ');
    rl.prompt();
    
    rl.on('line', function(saisie) { 
        console.log("Votre choix est: "+ saisie);       
        switch (saisie.trim()){
            case "1": 
                console.log(">> Liste des clients");
                var clients = recupererListeClients();
                clients.forEach(element => console.log("\t" + element.id + "-"+ element.nom +" "+element.prenom));
                break;
            case "2": nouveauClient();
                break;
            case "3": rechercheClient();
                break;
            case "4": disponibiliteChambre();
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
    console.log("\t2-Ajouter un client");
    console.log("\t3-Rechercher un client par nom");
    console.log("\t4-Vérifier la disponibilité d'une chambre");
    console.log("\t99-Sortir");
    
}

function recupererListeClients(){
    var service = require('./service.js');
    return service.clients;

}
function nouveauClient(){
    var ajout = require('./ajouter_client.js');
    ajout.msgAjout();
}
function rechercheClient(){
    var recherche = require('./rechercher_client.js');
    recherche.msgRecherche();
}
function disponibiliteChambre(){
    var dispo = require('./verfier_dispo_chambre.js');
    dispo.msgDispoChambre();
}

exports.menu = choixOption;