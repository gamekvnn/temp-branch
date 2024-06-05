module.exports = {
    description: 'Create a new module',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Module name',
        },
    ],
    actions: [
        {
            type: 'addMany',
            destination: 'src/modules/{{dashCase name}}',
            base: './generators/templates/module',
            templateFiles: './generators/templates/module/**/*',
        },
    ],
};
