# Hippa [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/hippa.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/hippa/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/hippa.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/hippa "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/hippa  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/hippa "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/readify?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/readify/badge.svg?branch=master&service=github

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

