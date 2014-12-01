#!/usr/bin/env node

(function() {
    'use strict';
    
    var hippo       = require('..'),
        
        tryRequire  = require('tryrequire'),
        
        HOME_WIN    = process.env.HOMEPATH,
        HOME_UNIX   = process.env.HOME,
        HOME        = (HOME_UNIX || HOME_WIN) + '/',
        
        name        = HOME + '.hippo.json',
        
        config      = tryRequire(name) || {},
        
        argv        = process.argv.slice(2),
        arg         = argv[0];
    
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
})();
