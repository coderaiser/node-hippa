(function() {
    'use strict';
    
    var GitHubApi   = require('github'),
        
        github      = new GitHubApi({
            version: '3.0.0'
        }),
        
        ERROR_EMPTY = 'could not be empty!';
        
    module.exports = function(token) {
        github.authenticate({
            type: 'oauth',
            token: token
        });
    };
    
    module.exports.read  = function(path, callback) {
        var arr, user, repo, name;
        
        if (!path)
            throw(Error('path ' + ERROR_EMPTY));
        
        if (!callback)
            throw(Error('callback ' + ERROR_EMPTY));
        
        arr     = path.split('/'),
        user    = arr[0],
        repo    = arr[1],
        name    = path.replace(user + '/', '')
                    .replace(repo + '/', '');
        
        github.repos.getContent({
            user: user,
            repo: repo,
            path: name
        }, function(error, data) {
            var content;
            
            if (!error && isStr(data.content))
                content = toStr(data.content);
            
            callback(error, content || data);
        });
    };
    
    function isStr(str) {
        return typeof str === 'string';
    }
    
    function toStr(base) {
        var str = new Buffer(base, 'base64')
            .toString('utf8');
        
        return str;
    }
})();
