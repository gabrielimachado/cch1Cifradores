const cesar = require('../CifradordeCesar/cesar');

function DecifraFrequencia(string) {
    let freq = {};
    for (let i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
            let character = string[i];
            if (freq[character]) {
                freq[character]++;
            } else {
                freq[character] = 1;
            }
        }
    }

    const sortable = Object.entries(freq).sort(([, a], [, b]) => b - a);
    let nova = "";

    let char1 = sortable[0][0];
    let char2 = sortable[1][0];

    let key = 1 + (char1.charCodeAt(0) - char2.charCodeAt(0));
    if (key < 0) {
        key = 1 + (char2.charCodeAt(0) - char1.charCodeAt(0));
    }
    console.log("Chave: " + key);

    nova = cesar.DecifradorCesarVernam(string, key, 'd');

    return nova;
}

module.exports = {
    DecifraFrequencia,
}