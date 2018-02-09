'use strict';

const GitHubApi = require('github');
const github = new GitHubApi({
    version: '3.0.0'
});

const ERROR_EMPTY = 'could not be empty!';

module.exports = (token) => {
    github.authenticate({
        type: 'oauth',
        token: token
    });
};

module.exports.read = (path, callback) => {
    if (!path)
        throw Error('path ' + ERROR_EMPTY);
    
    if (!callback)
        throw Error('callback ' + ERROR_EMPTY);
    
    const arr = path.split('/');
    const user = arr[0];
    const repo = arr[1];
    const name = path.replace(user + '/', '')
        .replace(repo + '/', '');
    
    github.repos.getContent({
        user,
        repo,
        path: name
    }, (error, data) => {
        let content;
        
        if (!error && isStr(data.content))
            content = toStr(data.content);
        
        callback(error, content || data);
    });
};

function isStr(str) {
    return typeof str === 'string';
}

function toStr(base) {
    const str = new Buffer(base, 'base64')
        .toString('utf8');
    
    return str;
}

