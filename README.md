# babgl-plugin-shebang

Replace or prepend [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)).

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
console.log('awesome');
```

**output**

```js
#!/usr/bin/env node
console.log('awesome');
```


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [["shebang", {
    "replacement": "#!/usr/bin/env node",
    "force": false
  }]]
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

