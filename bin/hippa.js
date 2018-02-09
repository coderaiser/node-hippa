#!/usr/bin/env node

'use strict';

var hippo       = require('..');
var tryRequire = require('tryrequire');

var HOME_WIN = process.env.HOMEPATH;
var HOME_UNIX = process.env.HOME;
var HOME = (HOME_UNIX || HOME_WIN) + '/';

var name = HOME + '.hippa.json';

var config = tryRequire(name) || {};

var argv = process.argv.slice(2);
var arg = argv[0];

if (/-v|--version/.test(arg))
    version();
else if (!arg || /-h|--help/.test(arg))
    help();
else
    main();

function main() {
    if (config.token)
        hippo(config.token);
    
    hippo.read(arg, function(error, data) {
        if (error)
            console.error(error.message);
        else if (!Array.isArray(data))
            console.log(data);
        else
            data.forEach(function(file) {
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
    var usage       = 'Usage: ' + info().name + ' <owner/repo/path>';
        
    console.log(usage);
}

