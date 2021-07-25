class Service{
    static clients = require("./clients.json");
    static listeClients(){
        this.clients.forEach(client => console.log(`\t ${client.id} ${client.nom} ${client.prenom}`));
    }
    static rechercherClient(client){
        return new Promise((resolve, reject) => { setTimeout( () => {
            // ici l'exécution du code est asynchrone
            // TODO utiliser resolve et reject en fonction du résultat de la recherche
            let clientTrouve = false;
            this.clients.forEach(cli=> {
                if(cli.nom == client.nom && cli.prenom == client.prenom){
                    clientTrouve = true;
                }        
            });
            if(clientTrouve){
                resolve(`\n\t Client Trouvé Found: ${client.id} ${client.nom} ${client.prenom}`);
            }
            else {
              reject(`\n\t Aucun client de nom ${client.nom} ${client.prenom}`);
            }
          }, 2) });
    }
}
exports.Service = Service;

