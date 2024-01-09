'use strict';

const currencyHelper = require('./helpers/currency.helper');
const demoFileService = require('./services/demo-file-01.service');
const demoFileService2 = require('./services/demo-file-02.service');


const price = 3.5;
const priceFormatted = currencyHelper.formatBE(price);
console.log(priceFormatted);


const tab = [52, 3, 4, 2, 6, 3, 1, 56, 2];

const odd1 = tab.filter(nb => nb % 2 == 1);
const odd2 = tab.filter(function (nb) {
    return nb % 2 == 1;
});


demoFileService.readPeople((people) => {
    console.log('La liste des personnes est : ');
    for (const person of people) {
        console.log(` - ${person}`);
    }

    demoFileService.addPeople('Gontran Bonheur', () => {

        demoFileService.readPeople((people) => {
            console.log(`Le nombre de personnes est : ${people.length}`);
        });
    });
});

async function demoAsyncAwait() {

    const people = await demoFileService2.readPeople();
    for (const person of people) {
        console.log(` - ${person}`);
    }

    await demoFileService2.addPeople('Miss Tick');

    const people2 = await demoFileService2.readPeople2();
    console.log(`Le nombre de personnes est : ${people2.length}`);
};
demoAsyncAwait();