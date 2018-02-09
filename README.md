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
const hippa = require('hippa');
const path = 'coderaiser/node-hippa/package.json';

hippa(path, (error, data) => {
    if (error)
        return console.error(error.message);
    
    console.log(data);
});
```

## License

MIT

