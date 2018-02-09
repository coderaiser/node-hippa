#!/usr/bin/env node

'use strict';

const hippo       = require('..');
const tryRequire = require('tryrequire');

const HOME_WIN = process.env.HOMEPATH;
const HOME_UNIX = process.env.HOME;
const HOME = (HOME_UNIX || HOME_WIN) + '/';

const name = HOME + '.hippa.json';

const config = tryRequire(name) || {};

const argv = process.argv.slice(2);
const arg = argv[0];

if (/-v|--version/.test(arg))
    version();
else if (!arg || /-h|--help/.test(arg))
    help();
else
    main();

function main() {
    if (config.token)
        hippo(config.token);
    
    hippo.read(arg, (error, data) => {
        if (error)
            return console.error(error.message);
        
        if (!Array.isArray(data))
            return console.log(data);
        
        data.forEach((file) => {
            console.log(file.name);
        });
    });
}

function version() {
    console.log('v' + info().version);
}

function info() {
    return require('../package');
}

function help() {
    const usage = 'Usage: ' + info().name + ' <owner/repo/path>';
    console.log(usage);
}

