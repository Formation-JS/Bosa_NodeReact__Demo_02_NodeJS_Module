const fs = require('node:fs');

const DATA_PEOPLE_FILE = './data/people.txt';

// Déclaration d'un object JS qui possede 2 méthodes
const demoFileService = {

    // Méthode pour lire les données du fichier
    readPeople: (callback) => {

        fs.readFile(DATA_PEOPLE_FILE, { encoding: 'utf-8' }, (error, data) => {
            // La fonction de callback pour traiter le resultat !

            if (!!error) {  // ou  « if(error !== null) »
                console.error('Erreur lors de la lecture du fichier !');
                return;
            }

            const result = data.split('\n');

            // Appel le callback de "readPeople"
            if(callback && typeof(callback) === 'function') {
                callback(result);
            }
        });
    },

    // Méthode pour ajouter des données au fichier
    addPeople: (person, robert) => {

        fs.writeFile(DATA_PEOPLE_FILE, '\n'+person, { encoding: 'utf-8', flag: 'a' }, (error) => {
            // La fonction de callback pour traiter le resultat !

            if (!!error) {  // ou  « if(error !== null) »
                console.error('Erreur lors de lecriture du fichier !');
                return;
            }
            console.log(`La personne "${person}" a été ajouté !`);

            // Appel le callback de "addPeople"
            if(robert && typeof(robert) === 'function') {
                robert();
            }
        });
    }
};



module.exports = demoFileService;