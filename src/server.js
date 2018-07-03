const faker = require('faker');

function server() {

    function generate(fn, n) {

        const _arr = [];

        for (var i = 0; i < n; i++) {
            _arr.push(fn(i));
        }

        return _arr;
    }

    function wineGenerator(id) {
        return {
            id: id,
            name: faker.name.title(),
            vineyard: faker.address.city(),
            year: randomYear(),
            description: faker.lorem.paragraph()
        }
    }

    function randomYear(){
        return parseInt(Math.random()*50+1950);
    }

    return {
        wines: generate(wineGenerator, 15),
    }

}

module.exports = server