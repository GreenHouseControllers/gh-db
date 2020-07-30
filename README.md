# ghc-db

This module helps you to work with GH_DB. https://github.com/GreenHouseControllers/GH-database

#### install
    npm install ghc-db --save
#### or
    npm install ghc-db 

#### add module to project
    const db = require('ghc-db');
    
#### connect with db:
Here you have to give port to module that you use for db.

    db.connect(port);   

default port is 7202.

You can change it in db  ./config/config.json

#### functions and callbacks
All requests mast be inside async function or callback. 

### Usage
#### dirFile methods:
1. readFile 
read file and return its contents.

        let answer = await db.df('readFile', path, name);
        
2. createFile
create file and return message or error.

        let answer = await db.df('createFile', path, name);

3. removeFile 
remove file and return message or error.

        let answer = await db.df('removeFile', path, name);

4. createDir 
create folder and return message or error.

        let answer = await db.df('createDir', path, name);

5. removeDir 
remove folder and return message or error.

        let answer = await db.df('removeDir', path, name);

6. writeFile 
write data to file and return message or error. 

        let answer = await db.df('writeFile', path, name);
        
#### json methods

1. readJson
read json file and return its contents.

        let answer = await db.json('readJson', path, name);

2. writeJson
write object, or array to json file and return message or error. 

        let answer = await db.json('writeJson', path, name);

        
3. getElement
return element from array in json file.

        let answer = await db.json('getElement', path, name, data);
        
(here data is name or number of the element)

4. pushElement
push element to the end of array in json file

        let answer = await db.json('pushElement', path, name, data);

5. deleteElement
delete element in the array;
    
        let answer = await db.json('deleteElement', path, name, data);

#### exemple of return message:
    file has been wrote
    
#### exemple of return error:
    {
        "message": "Can not read file",
        "err": {
            "errno": -2,
            "code": "ENOENT",
            "syscall": "open",
            "path": "/home/DB/file_sistem/exemple/exemple.txt"
        }
}

To find info about errors, look at the file sistem documentation

### exemple of code

    const db = require('./index'); //add ghc-db
    const express = require('express');
    
    const app = express();
    const PORT = 3000;
    
    //connect with db
    db.connect(7202);
    
    app.get('/', async function(req, res) {
        try {
            //request to db
            let answer = await db.json('readJson', '/exemple', 'exemple.json',);
            res.status(200).send(answer);
        }catch(err){
            res.status(400).send(err);
        }
    })
    
    app.listen(PORT, function() {
        console.log(`DB started on port ${PORT}`);
    });
