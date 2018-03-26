const path = require('path');

module.exports = {
    entry: './src/app.js',
    resolve: {
        modules: [path.resolve(__dirname, "custom_modules"), "node_modules"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'import.bundle.js'
    }
};