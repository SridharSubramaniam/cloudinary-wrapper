const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/script.js',
    output: {
        filename: 'script.js',
        library: 'cloudinary'
    }
};