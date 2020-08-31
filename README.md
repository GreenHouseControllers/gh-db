# ghc-db

This module helps you to work with GH_DB. https://github.com/GreenHouseControllers/GH-database

### install
    npm install ghc-db --save
### or
    npm install ghc-db 

### add module to project
Add this string everywhere where you want to use db methods.
 
    const db = require('ghc-db');
    
### connect with db:
Do it only once in te main file of the project.

    db.connect(url, token);   
    
**exemple**

    db.connect('http://localhost:7202', 't111');
    
default url is "http://localhost:7202"

default token is "t111"

You can change port and token in db  ./config/config.json

**exemple of config file**
    
    {
        "port": 7202,
        "dbToken": "t111"
    }

### functions and callbacks
All requests mast be inside async function or callback. 

## Usage
### dirFile methods:
1. readFile 
read file and return its contents.

        const data = {
            path: "./exemple_path",
            name: "newFile.json" 
        }
        let answer = await db.readFile(data);
            
2. createFile
create file and return message or error.

        const data = {
            path: "./exemple_path",
            name: "newFile.json" 
        }
        let answer = await db.createFile(data);

3. removeFile 
remove file and return message or error.
 
        const data = {
            path: "./exemple_path",
            name: "newFile.json" 
        }    
        let answer = await db.removeFile(data);

4. createDir 
create folder and return message or error.

        const data = {
            path: "./exemple_path",
            name: "newDir" 
        }
        let answer = await db.createDir(data);

5. removeDir 
remove folder and return message or error.

            const data = {
                path: "./exemple_path",
                name: "newDir" 
            }
            let answer = await db.removeDir(data);

6. writeFile 
write data to file and return message or error. 

        const data = {
            path: "./exemple_path",
            name: "newDir", 
            data: data
        }
        let answer = await db.writeFile(data);
            
### json methods

1. readJson
read json file and return its contents.
        
        const data = {
            path: "./exemple_path",
            name: "newDir" 
        }
        let answer = await db.readJson(data);

2. writeJson
write object, or array to json file and return message or error. 

        const data = {
            path: "./exemple_path",
            name: "newDir",
            data: data
        }
        let answer = await db.writeJson(data);
        
3. getElement
return element from array in json file.
(here data is name or number of the element)

        const data = {
            path: "./exemple_path",
            name: "newDir",
            data: "name_of_element"
        }
        let answer = await db.getElement(data);
        
4. pushElement
push element to the end of array in json file
   
        const data = {
            path: "./exemple_path",
            name: "newDir",
            data: data
        }
        let answer = await db.pushElement(data);
        
5. deleteElement
delete element in the array.
    
        const data = {
            path: "./exemple_path",
            name: "newDir",
            data: data
        }
        let answer = await db.deleteElement(data);
        
### crud methods

1. create
add new element to the collection.
    
        const data = {
            name: "newDir",
            data: data
        }
        let answer = await db.create(data);
        
2. read 
read collection.

        const data = {
            name: "newDir"
        }
        let answer = await db.read(data);
        
3. update
change one element to other

        const data = {
            name: "newDir",
            key: "key",
            data: "value of object",
            newData: data
        }
        let answer = await db.update(data);

4. delete
delete one element in the collection

        const data = {
            name: "newDir",
            key: "key",
            data: "value of object"
        }
        let answer = await db.delete(data);
        
### create and remove collection        

1. createCollection - create collection. 
   
        const data = {
            "name": "newCollection",
            "path": "./exemple_path/newCollection.json",
            "fileName": "newCollection.json"
        }
        let answer = await db.createCollection(data);
        
2. removeCollection - remove collection.

        const data = {
            "name": "newCollection"
        }
        let answer = await db.removeCollection(data);

### More collection methods

1. get - get one element from the collection (if you have collection with the same objects that you fined db will return just the first)

    const data = {
        "name": "newCollection",
        "key": "name",
        "data": "jack"
    }
    let answer = await db.get(data);

### exemple of return message:
    file has been wrote
    
### exemple of return error:
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

## exemple of code

    const db = require('ghc-db'); //add ghc-db
    const express = require('express');
    
    const app = express();
    const PORT = 3000;
    
    //connect with db
    db.connect(7202);
    // work with file
    app.get('/json', async function(req, res) {
        try {
            //create data
            const data = {
                path: "./exemple_path",
                name: "newFile.json" 
            }
            //request to db
            let answer = await db.createFile(data);
            res.status(200).send(answer);
        }catch(err){
            res.status(400).send(err);
        }
    })
    // work with json
    app.get('/json', async function(req, res) {
        try {
            //create data
            const data = {
                path: "./exemple_path",
                name: "newFile.json" 
            }
            //request to db
            let answer = await db.readJson(data);
            res.status(200).send(answer);
        }catch(err){
            res.status(400).send(err);
        }
    })
    // work with crud
    app.get('/crud', async function(req, res){
        try {
            //create data
            const data = {
                "method": "create",
                "name": "newCollection",
                "data": {
                    "name": "jack",
                    "age": 15
                } 
            }
            //request to db
            let answer = await db.create(data);
            res.status(200).send(answer);
        }catch(err){
            res.status(400).send(err);
        }
    })
    
    app.listen(PORT, function() {
        console.log(`DB started on port ${PORT}`);
    });
