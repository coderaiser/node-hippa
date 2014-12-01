# Hippa

Read file or directory contents from github repo with help of node.

## Install

```
npm i hippa -g
```
## How to use?

### Global

```
$ hippa
Usage: hippa [owner/repo/path]

$ hippa coderaiser/node-hippa/README.md
```

### Local

```
npm i hippa --save
```

## Example

```js
var hippa   = require('hippa'),
    path    = 'coderaiser/node-hippa/package.json';

hippa(path, function(error, data) {
    if (error)
        console.error(error.message);
    else
        console.log(data);
});
```

## License

MIT
