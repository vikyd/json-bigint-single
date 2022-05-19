const path = require("path");

const Prefix = "json-bigint-single";
const VarName = "JsonBigInt";

function createConf(outputName, libraryType, minimize) {
  return {
    entry: {
      [outputName]: [
        path.resolve(__dirname, "node_modules/json-bigint/index.js"),
      ],
    },
    output: {
      filename: "[name]",
      path: path.resolve(__dirname, "dist"),
      library: {
        type: libraryType,
        name: VarName,
      },
    },
    optimization: { minimize },
  };
}

function createConfList(libraryTypeList) {
  return libraryTypeList.reduce((arr, type) => {
    arr.push(createConf(`${Prefix}.${type}.js`, type, false));
    arr.push(createConf(`${Prefix}.${type}.min.js`, type, true));
    return arr;
  }, []);
}

module.exports = createConfList(["var", "umd"]);
