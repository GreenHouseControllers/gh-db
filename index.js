const axios = require('axios');

async function requestFunc(method, path, name, data){
	const dataRequest = JSON.stringify({ method, path, name, data });

	const config = {
		method: 'POST',
		url: 'http://localhost:7202/api/fs/df',
		headers: {
			'Content-Type': 'application/json'
		},
		data : dataRequest
	};

	const response = await axios(config);
	return response.data;
}

exports.readJson = function(path, name){
	let method = 'readJson';
	let answer = requestFunc(method, path, name);
	return(answer);
}

exports.readFile = function(path, name){
	let method = 'readFile';
	let answer = requestFunc(method, path, name);
	return(answer);
}

exports.removeFile = function(path, name){
	let method = 'removeFile';
	let answer = requestFunc(method, path, name);
	return(answer);
}

exports.createFile = function(path, name){
	let method = 'createFile';
	let answer = requestFunc(method, path, name);
	return(answer);
}

exports.createDir = async function(path, name){
	let method = 'createDir';
	let answer = await requestFunc(method, path, name);
	return(answer);
}

exports.removeDir = function(path, name){
	let method = 'removeDir';
	let answer = requestFunc(method, path, name);
	return(answer);
}

exports.writeFile = function(path, name, data){
	let method = 'writeFile';
	let answer = requestFunc(method, path, name, data);
	return(answer);
}


