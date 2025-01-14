module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build', // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
                'ci', // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
                'docs', // Documentation only changes
                'feat', // A new feature
                'fix', // A bug fix
                'perf', // A code change that improves performance
                'refactor', // A code change that neither fixes a bug nor adds a feature
                'revert', // A commit used to revert a previous commit
                'style', // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
                'test', // Adding missing tests or correcting existing tests,
                'add', // Add a new feature
            ],
        ],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
    },
}