var override = require('customize-cra').override;
var _a = require('react-app-rewire-alias/lib/aliasDangerous'), aliasDangerous = _a.aliasDangerous, configPaths = _a.configPaths;
module.exports = {
    webpack: override(aliasDangerous(configPaths('./tsconfig.paths.json'))),
};
