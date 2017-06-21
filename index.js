const fileExists = require('file-exists');
const hasha = require('hasha');
const {isAbsolute, join} = require('path');

function filehash(filepath) {
    if(!isAbsolute(filepath)) {
        filepath = join(process.cwd(), filepath)
    }
    if(fileExists.sync(filepath)) {
        return hasha.fromFileSync(filepath, {algorithm: 'md5'}).slice(10);
    } else {
        console.error(`\n File not found: ${filepath}`);
        return Date.now();
    }
}

/**
 * @param filepath
 * @param callback
 * @param options
 * @returns {*}
 */
module.exports = function (filepath, callback, options) {
    options = Object.assign({}, options);
    return filehash(filepath);
};