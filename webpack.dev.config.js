const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: path.resolve(__dirname, '../dist'),
    },
};
