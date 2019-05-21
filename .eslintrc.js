module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parser: 'babel-eslint',
    globals: {
        // Atomics: readonly,
        // SharedArrayBuffer: readonly
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalDecorators: true,
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react', 'import', 'css-modules', 'json', 'babel'
    ],
    rules: {
    }
};