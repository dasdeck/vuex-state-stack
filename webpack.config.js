const nodeExternals = require('webpack-node-externals');

const rules = [{
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: ['env']
    }
}];

const browser = {
    entry: {
        'state-stack': './src/browser.js'
    },
    output: {
        filename: './dist/vuex-state-stack.browser.js',
        libraryTarget: 'var'
    },
    devtool: 'source-map',
    module: {
        rules: rules
    }
}

const common = {
    entry: {
        'state-stack': './src/vuex-state-stack.js'
    },
    output: {
        filename: './dist/vuex-state-stack.js',
        libraryTarget: "umd"
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    module: {
        rules: rules
    }
}

module.exports = [browser, common]