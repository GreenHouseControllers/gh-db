//add modules
const config = require('./system_functions/config');
const dataBuilder = require('./functions/dataBuilder');
const uploadDataBuilder = require('./functions/uploadDataBuilder');

const conf = require('gh-config');

const uploader = require('./axios/uploader')

conf.connect(__dirname, './config/config.json');

//methods
//connection
exports.connect = async(url, token) => {
    return await config.connect(url, token);
}
//----------------------------------------------------------------------
//df
//dir
exports.createDir = async (data) => {
    return await dataBuilder('df', data, 'createDir');
}

exports.removeDir = async (data) => {
    return await dataBuilder('df', data, 'removeDir');
}
//----------------------------------------------------------------------
//file
exports.createFile = async (data) => {
    return await dataBuilder('df', data, 'createFile');
}

exports.removeFile = async (data) => {
    return await dataBuilder('df', data, 'removeFile');
}

exports.readFile = async (data) => {
    return await dataBuilder('df', data, 'readFile');
}

exports.writeFile = async (data) => {
    return await dataBuilder('df', data, 'writeFile');
}
//---------------------------------------------------------------------
//more
exports.getDirContent = async (data) => {
    return await dataBuilder('fsState', data, 'getDirContent');
}
exports.rename = async (data) => {
    return await dataBuilder('df', data, 'rename');
}
//---------------------------------------------------------------------
//json
exports.readJson = async (data) => {
    return await dataBuilder('json', data, 'readJson');
}

exports.writeJson = async (data) => {
    return await dataBuilder('json', data, 'writeJson');
}

exports.getElement = async (data) => {
    return await dataBuilder('json', data, 'getElement');
}

exports.pushElement = async (data) => {
    return await dataBuilder('json', data, 'pushElement');
}

exports.deleteElement = async (data) => {
    return await dataBuilder('json', data, 'deleteElement');
}

//------------------------------------------------------------------------------
//collection
//crud
exports.create = async (data) => {
    return await dataBuilder('collection', data, 'create');
}

exports.read = async (data) => {
    return await dataBuilder('collection', data, 'read');
}

exports.update = async (data) => {
    return await dataBuilder('collection', data, 'update');
}

exports.delete = async (data) => {
    return await dataBuilder('collection', data, 'delete');
}

//-----------------------------------------------------------------------------
//collection main

exports.createCollection = async (data) => {
    return await dataBuilder('collection', data, 'createCollection');
}

exports.removeCollection = async (data) => {
    return await dataBuilder('collection', data, 'removeCollection');
}

//--------------------------------------------------------------------------------
//more collection methods

exports.get = async (data) => {
    return await dataBuilder('collection', data, 'get');
}

exports.renameCollection = async (data) => {
    return await dataBuilder('collection', data, 'renameCollection');
}

//--------------------------------------------------------------------------------
// Storage

exports.upload = async (data) => {
    return await uploadDataBuilder('storageUpload', data);
}

exports.download = async (data) => {
    return await dataBuilder('storageDownload', data);
}

exports.remove = async (data) => {
    return await dataBuilder('storageMethods', data, 'remove');
}

//--------------------------------------------------------------------------------
//auth

exports.register = async (data) => {
    return await dataBuilder('register', data);
}

exports.login = async (data) => {
    return await dataBuilder('login', data);
}

//--------------------------------------------------------------------------------
// admin methods

exports.getErrorLog = async () => {
    return await dataBuilder('getErrorLog');
}




