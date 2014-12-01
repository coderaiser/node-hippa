# Hippo

Read file or directory contents from github repo with help of node.

## Install

```
npm i hippo -g
```
## How to use?

### Global

```
$ hippo
Usage: hippo [owner/repo/path]

$ hippo coderaiser/node-hippo/README.md
```

### Local

```
npm i hippo --save
```

## Example

```js
var hippo   = require('hippo'),
    path    = 'coderaiser/node-hippo/package.json';

hippo(path, function(error, data) {
    if (error)
        console.error(error.message);
    else
        console.log(data);
});
```

## License

MIT
