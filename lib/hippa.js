'use strict';

const github = require('@octokit/rest')();
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
    const owner = arr[0];
    const repo = arr[1];
    const name = path.replace(owner + '/', '')
        .replace(repo + '/', '');
    
    github.repos.getContent({
        owner,
        repo,
        path: name
    }, (error, result) => {
        const data = result.data;
        
        if (error)
            return callback(error);
        
        if (isStr(data.content))
            return callback(null, toStr(data.content));
        
        callback(null, data);
    });
};

function isStr(str) {
    return typeof str === 'string';
}

function toStr(base) {
    return Buffer.from(base, 'base64').toString();
}

