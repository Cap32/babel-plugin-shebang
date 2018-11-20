# babel-plugin-shebang

[![Build Status](https://travis-ci.org/Cap32/babel-plugin-shebang.svg?branch=master)](https://travis-ci.org/Cap32/babel-plugin-shebang) [![CircleCI](https://circleci.com/gh/Cap32/babel-plugin-shebang.svg?style=shield)](https://circleci.com/gh/Cap32/babel-plugin-shebang)
[![Coverage Status](https://coveralls.io/repos/github/Cap32/babel-plugin-shebang/badge.svg?branch=master)](https://coveralls.io/github/Cap32/babel-plugin-shebang?branch=master)
[![License](https://img.shields.io/badge/license-MIT_License-brightgreen.svg?style=flat)](https://github.com/Cap32/babel-plugin-shebang/blob/master/LICENSE.md)

Replace or prepend [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>).

Useful to write `#!/usr/bin/env ./node_modules/.bin/babel-node` modules in development env, and compile to `#!/usr/bin/env node` in production env.

## Installation

```sh
$ npm install babel-plugin-shebang
```

## Example

**.babelrc**

```json
{
  "plugins": ["shebang"]
}
```

**input**

```js
#!/usr/bin/env ./node_modules/.bin/babel-node
console.log("awesome");
```

**output**

```js
#!/usr/bin/env node
console.log("awesome");
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [
    [
      "shebang",
      {
        "replacement": "#!/usr/bin/env node",
        "force": false
      }
    ]
  ]
}
```

### Options

- `replacement` (String): Defaults to `#!/usr/bin/env node`
- `force` (Boolean): Force prepend shebang. Defaults to `false`

### Via CLI

```sh
$ babel --plugins shebang script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["shebang"]
});
```

## License

MIT
