This module helps you to work with GH_DB.

##### install
	npm install gh-db --save
##### or
	npm install gh-db 

const db = require('gh-db');

##### Methods:
1. readFile - read file and return its contents.
2. createFile - create file and return message or error.
3. removeFile - remove file and return message or error.
4. readJson - read and parse json file and return its contents.
5. createDir - create folder and return message or error.
6. removeDir - remove folder and return message or error.
7. writeFile - write data to file and return message or error. 

###### all methods except writeFile:
    let answer = await db.method(path, name);

###### writeFile:
    let answer = await db.method(path, name, data);

you have to use async callback in the route

path - 'a/b/c' - path to the directory which you need
name - 'file-name' - name of file which you want to write
data - 'Hallo World' - text or variable that you want to write

##### exemple of code
	app.get('/', async (req, res) => {
		let answer = await db.createDir('', 'exemple');
		res.status(200).send(answer);
	});

All methods except readFile, return you messages like 'directory has been created'
and readFile return content of file	

if you got message like 'Can not read file' and error, look for errors of the fs.

##### exemple of err:
    {
        "message": "Can not create directory",
        "err": {
            "errno": -17,
            "code": "EEXIST",
            "syscall": "mkdir",
            "path": "/home/glab/Рабочий стол/Glab/jarvis/DB/1.0/DB/db/file_sistem/exemple"
        }
    }


