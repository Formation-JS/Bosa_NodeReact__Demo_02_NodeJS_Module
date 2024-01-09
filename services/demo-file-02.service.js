const fs = require('node:fs/promises');

const DATA_PEOPLE_FILE = './data/people.txt';

// Déclaration d'un object JS qui possede 2 méthodes
const demoFileService = {

    // Méthode pour lire les données du fichier
    readPeople: () => {

        return fs.readFile(DATA_PEOPLE_FILE, { encoding: 'utf-8' })
            .then((data) => {
                const result = data.split('\n');
                return result;
            })
            .catch(() => {
                console.error('Erreur lors de la lecture du fichier !');
                return [];
            })

    },

    readPeople2: async () => {

        try {
            const data = await fs.readFile(DATA_PEOPLE_FILE, { encoding: 'utf-8' });
            const result = data.split('\n');
            return result;
        }
        catch(error) {
            console.error('Erreur lors de la lecture du fichier !');
            return []
        }
    },

    // Méthode pour ajouter des données au fichier
    addPeople: async (person) => {

        try {
            await fs.writeFile(DATA_PEOPLE_FILE, '\n'+person, { encoding: 'utf-8', flag: 'a' });
            console.log(`La personne "${person}" a été ajouté !`);
        }
        catch(error) {
            console.error('Erreur lors de lecriture du fichier !');
        }
    }
};



module.exports = demoFileService;