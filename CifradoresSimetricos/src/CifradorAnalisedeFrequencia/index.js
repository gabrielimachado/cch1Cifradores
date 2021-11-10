#! /usr/bin/env node

const commander = require('commander');
const package = require('../../package.json');
const fileManager = require('../file-manager');
const freq = require('./frequencia')

commander.version(package.CifradorAnalisedeFrequenciaVersion);

commander
    .argument('<path>') 
    .argument('<outputPath>')
    .action((path, outputPath)=>{
        let txt = fileManager.readFile(path);
        const decrypt = freq.DecifraFrequencia(txt);
        fileManager.writeFile(outputPath, decrypt);
    });

commander.parse(process.argv);