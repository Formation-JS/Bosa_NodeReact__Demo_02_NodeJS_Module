// Définition d'un fonction helper

/**
 * Fonction de formatage d'un prix en format belge
 * @param {number} value 
 */
function formatBE(value) {

    const valueFormatted = value.toLocaleString('fr-be', {
        style: 'currency',
        currency: 'EUR'
    });

    return valueFormatted;
};


// Exportation de la fonction en tant que module via un objet
module.exports = {
    formatBE
};