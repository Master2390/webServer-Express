const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar', (texto) => {
    let word = texto.split(' ');
    word.forEach((element, index) => {
        word[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });

    return word.join(' ');
});