# json-bigint-single

Single file version of [json-bigint](https://github.com/sidorares/json-bigint).

Suitable for single line situation, like Postman `Global Variable`.

# Install

Download directly from CDN:

- unpkg: https://unpkg.com/json-bigint-single@1.0.0/dist/json-bigint-single.var.min.js
  - page: https://unpkg.com/browse/json-bigint-single@1.0.0/

Or by npm, yarn:

```sh
# npm
npm install json-bigint-single

# yarn
yarn add json-bigint-single
```

# Usage

## Used in Postman Script

In Postman-like Apps:

1. create new global variable:

- name: `lib-json-bigint`
- value: content of `dist/json-bigint-single.var.min.js`

2. in Postman script:

```js
// 9007199254740991 - Number.MAX_SAFE_INTEGER:
// 99999999999999998 - example bigger int
// example json string:
const respBodyStr = `{"a": 99999999999999998}`;

// load lib from global variable
eval(pm.globals.get("lib-json-bigint"));

// got variable: JsonBigInt
// usage: https://github.com/sidorares/json-bigint
const obj = JsonBigInt.parse(respBodyStr);

// before parse: {a: 99999999999999998}
// after parse : {a: "99999999999999998"}
// big int value becomes string
console.log(obj);

// need `.toString()` to get final string value
// otherwise got a special object
const strVal = obj.a.toString();

// postman assertion with string
pm.test("JSON value equals", function () {
  pm.expect(strVal).to.eql("99999999999999998");
});
```

# Development

This repo is a webpack build project.

```sh
# clone
git clone https://github.com/vikyd/json-bigint-single.git

# get in
cd json-bigint-single

# install dependencies
npm install

# build dist
npm run build
```
