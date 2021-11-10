#! /usr/bin/env node

const commander = require('commander');
const package = require('../../package.json');
const FileManager = require('../File-manager');
const cesar = require('./cesar');

commander.version(package.version);

commander
    .argument('<path>')
    .argument('<outputPath>')
    .description('Cifra e decifra um texto de um arquivo txt')
    .option('-c', 'Opção que cifra o texto a partir do arquivo .txt')
    .option('-d', 'Opção que decifra o texto a partir do arquivo .txt já cifrado')
    .option('-k [key]', 'Opção que informa a chave para o algoritmo cifrar e decifrar o texto')
    .action((path, outputPath, options) => {
        let txt = FileManager.readFile(path);
        let resultado = ''
        if (options.c == true && options.d == true) {
            console.log('Escolha apenas uma opção por vez (-c ou -d)');
            return;
        } else if (options.c == null && options.d == null) {
            console.log('A opção de decifrar -d ou cifrar -c é obrigatória (-d ou -c)');
        } else {
            let k = 0;
            if (options.k === null || options.k === true || options.k === undefined) {
                k = 0;
            } else {
                k = k + parseInt(options.k)
                if (options.d === true) {
                    resultado = cesar.cesar(txt, k, 'd');
                } else {
                    resultado = cesar.cesar(txt, k, 'c');
                }
            }
            FileManager.writeFile(outputPath, resultado);
        }
    });

commander.parse(process.argv);