# ghc-db 2.2.0

This module helps you to work with GH_DB. https://github.com/GreenHouseControllers/GH-database

### install
    npm install ghc-db --save
### or
    npm install ghc-db 

### add module to project
Add this string everywhere where you want to use db methods.
```js
const db = require('ghc-db');
```    
### connect with db:
Do it only once in te main file of the project.
```js
db.connect(url, token);   
```    
**exemple**
```js
db.connect('http://localhost:7202', 't111');
```    
default url is "http://localhost:7202"

default token is "t111"

You can change port and token in db  ./config/config.json

**exemple of config file**
```json
{
    "port": 7202,
    "dbToken": "t111"
}
```
### functions and callbacks
All requests mast be inside async function or callback. 

## Usage

### About methods

#### Methods dirFile
1. readFile - getElement file and return its contents.
2. createFile - create file and return message or error.
3. removeFile - remove file and return message or error.
4. createDir - create directory and return message or error.
5. removeDir - remove directory and return message or error.
6. writeFile - write data to file and return message or error. 
7. rename - rename file or directory and return message or error. 
8. getDirContent - get content of directory (the same as ls in terminal).

#### Methods json
1. readJson - getElement and parse json file and return its contents.
2. writeJson - write json file and return message.
3. getElement - return element from array in json file.
4. pushElement - push element to the end of array in json file. 
5. deleteElement - delete element from json array.

#### Methods collection
**main**
1. createCollection - create collection and return message.
2. removeCollection - remove collection and return message.

**CRUD**
1. create - add object and return message.
2. read - read collection and return its content.
3. update - delete object and add new object and return message.
4. delete - delete object and return message.

**more methods**
1. get - get object by key and value.
2. renameCollection - rename collection.

#### Methods storage
1. upload - upload your file to the storage.
2. download - download file from the storage.
3. remove - remove file from the storage. 

#### Methods admin 
1. register - register user that can work with db without token, but you need token for register. 
2. login - authorizes the user without token and returns you token.
3. getErrorLog - returns full error log list.

### Syntax

### dirFile methods:
1. readFile 
read file and return its contents.
```js
const data = {
    path: "./exemple_path",
    name: "newFile.json" 
}
let answer = await db.readFile(data);
```            
2. createFile
create file and return message or error.
```js
const data = {
    path: "./exemple_path",
    name: "newFile.json" 
}
let answer = await db.createFile(data);
```
3. removeFile 
remove file and return message or error.
 ```js
const data = {
    path: "./exemple_path",
    name: "newFile.json" 
}    
let answer = await db.removeFile(data);
```
4. createDir 
create folder and return message or error.
```js
const data = {
    path: "./exemple_path",
    name: "newDir" 
}
let answer = await db.createDir(data);
```
5. removeDir 
remove folder and return message or error.
```js
const data = {
    path: "./exemple_path",
    name: "newDir" 
}
let answer = await db.removeDir(data);
```
6. writeFile 
write data to file and return message or error. 
```js
const data = {
    path: "./exemple_path",
    name: "newDir", 
    data: data
}
let answer = await db.writeFile(data);
```            
### json methods

1. readJson
read json file and return its contents.
```js        
const data = {
    path: "./exemple_path",
    name: "newDir" 
}
let answer = await db.readJson(data);
```
2. writeJson
write object, or array to json file and return message or error. 
```js
const data = {
    path: "./exemple_path",
    name: "newDir",
    data: data
}
let answer = await db.writeJson(data);
```        
3. getElement
return element from array in json file.
(here data is name or number of the element)
```js
const data = {
    path: "./exemple_path",
    name: "newDir",
    data: "name_of_element"
}
let answer = await db.getElement(data);
```       
4. pushElement
push element to the end of array in json file
```js   
const data = {
    path: "./exemple_path",
    name: "newDir",
    data: data
}
let answer = await db.pushElement(data);
```        
5. deleteElement
delete element in the array.
```js    
const data = {
    path: "./exemple_path",
    name: "newDir",
    data: data
}
let answer = await db.deleteElement(data);
```        
### crud methods

1. create
add a new element to the collection.
```js    
const data = {
    name: "newDir",
    data: data
}
let answer = await db.create(data);
```        
2. read 
read collection.
```js
const data = {
    name: "newDir"
}
let answer = await db.read(data);
```        
3. update
change one element to other
```js
const data = {
    name: "newDir",
    key: "key",
    data: "value of object",
    newData: data
}
let answer = await db.update(data);
```
4. delete
delete one element in the collection
```js
const data = {
    name: "newDir",
    key: "key",
    data: "value of object"
}
let answer = await db.delete(data);
```        
### create and remove collection        

1. createCollection - create collection. 
```js   
const data = {
    "name": "newCollection",
    "path": "./exemple_path/newCollection.json",
    "fileName": "newCollection.json"
}
let answer = await db.createCollection(data);
```        
2. removeCollection - remove collection.
```js
const data = {
    "name": "newCollection"
}
let answer = await db.removeCollection(data);
```
### More collection methods

1. get - get one element from the collection (if you have collection with the same objects that you fined db will return just the first)
```js
const data = {
    "name": "newCollection",
    "key": "name",
    "data": "jack"
}
let answer = await db.get(data);
```

2. renameCollection - rename collection
```js
const data = {
    "name": "newCollection",
    "newName": "otherCollection"
}
let answer = await db.renameCollection(data);
```

### Storage

1. upload - uploads files to the storage.
```js
const fs = require('fs');
const FormData = require('form-data');

const upload = async () => {
    let data = new FormData();
    data.append('filedata', fs.createReadStream('/some/path/file.txt'));

    let answer =  await db.upload(data);
}
upload();
```

2. download - downloads files from the storage.
```js
const data = {
    "name": "image.jpg"
}

let answer = await db.download(data);
```

3. remove - remove file from the storage.
```js
const data = {
    "name": "image.jpg"
}

let answer = await db.remove(data);
```

### Authorization

1. login - login user.
```js
const data = {
    "username": "joseph",
    "password": "123a",
    "token": "t111"
}

let answer = await db.register(data);
```

2. login - login user.
```js
const data = {
    "username": "joseph",
    "password": "123a"
}

let answer = await db.login(data);
```

### Admin methods

1. getErrorLog - returns all error logs
```js
let answer = await db.getErrorLog();
```

### example of return message:
    file has been wrote
    
### example of return error:
```json
{
    "message": "Can not read file",
    "err": {
        "errno": -2,
        "code": "ENOENT",
        "syscall": "open",
        "path": "/home/DB/file_system/example/example.txt"
    }
}
```

To find info about errors, look at the file sistem documentation

### Example of full error log

```json
[
    {
        "time": "10-29-2020, 12:57:01 pm",
        "log": {
            "message": "Can not remove collection",
            "err": {}
        }
    },
    {
        "time": "11-06-2020, 12:43:39 pm",
        "log": {
            "message": "Can not remove file",
            "error": {
                "code": "ERR_INVALID_ARG_TYPE"
            }
        }
    },
    {
        "time": "11-06-2020, 12:44:10 pm",
        "log": {
            "message": "Can not remove directory",
            "err": {
                "errno": -2,
                "syscall": "rmdir",
                "code": "ENOENT",
                "path": "/home/glab/GH-database/data/file_system/example"
            }
        }
    },
    {
        "time": "11-06-2020, 12:44:26 pm",
        "log": {
            "message": "Can not get collection path",
            "err": "invalid collection name"
        }
    }
]
```

## example of code
```js
const db = require('ghc-db'); //add ghc-db
const express = require('express');

const app = express();
const PORT = 3000;

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect with db
db.connect(7202);
// work with file
app.get('/json', async (req, res) => {
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
});
// work with json
app.get('/json', async (req, res) => {
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
});
// work with crud
app.get('/crud/create', async (req, res) => {
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
});

app.post('/getImage', async function(req, res){    
    try{
        let data = {
            name: req.body.name
        }
        
        let answer = await db.download(data); 
        res.status(200).send(answer);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(PORT, function() {
    console.log(`DB started on port ${PORT}`);
});
```

