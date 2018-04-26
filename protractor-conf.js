
const tags = process.env.npm_config_tags ? process.env.npm_config_tags.split(',') : [];
tags.push('~@ignore');

exports.config = {

    specs: 'features/*.feature',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {browserName: 'chrome'},

    baseUrl: 'http://178.124.206.54/',

    ignoreUncaughtExceptions: true,

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            'step_definitions/*.js'
        ],
        tags: tags
    },

    allScriptsTimeout: 120000

};