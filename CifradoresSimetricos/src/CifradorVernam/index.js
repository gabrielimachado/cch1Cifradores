#! /usr/bin/env node
const commander = require('commander');
const package = require('../../package.json');
const fileManager = require('../file-manager');
const vernam = require('./vernam')
commander.version(package.CifradorVernamVersion);

commander
    .argument('<keyPath>')
    .argument('<path>')
    .argument('<outputPath>')
    .option('-c', 'Opção que cifra o texto a partir do arquivo .txt')
    .option('-d', 'Opção que decifra o texto a partir do arquivo .txt já cifrado')

    .action((keyPath, path, outputPath, options) => {
        if (options.c == true && options.d == true) {
            return;
        } else if (options.c == null && options.d == null) {
        } else {
            let txt = fileManager.readFile(path);
            txt = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if (options.c === true) {
                let chave = vernam.gerarChave(txt);
                fileManager.writeFile(keyPath, chave);
                fileManager.writeFile(outputPath, vernam.cifra(txt, chave));
            } else if (options.d === true) {
                let chave = fileManager.readFile(keyPath);
                fileManager.writeFile(outputPath, vernam.decifra(txt, chave));
            } else {
                throw "inválido";
            }
        }


    });

commander.parse(process.argv);