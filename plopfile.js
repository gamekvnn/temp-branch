/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const ModulePlop = require('./generators/module');

module.exports = function (plop) {
    plop.setHelper('camelCase', function (text) {
        // Generate camelCase logic from pascalCase
        return text.charAt(0).toLowerCase() + text.slice(1);
    });

    plop.setHelper('dashCase', function (text) {
        // Generate dashCase logic from pascalCase
        return text
            .replace(/([A-Z])/g, function (g) {
                return '-' + g.toLowerCase();
            })
            .replace(/^-/, '');
    });

    plop.setHelper('snakeCase', function (text) {
        // Generate snakeCase logic from pascalCase
        return text
            .replace(/([A-Z])/g, function (g) {
                return '_' + g.toLowerCase();
            })
            .replace(/^_/, '');
    });

    plop.setGenerator('module', ModulePlop);
};
