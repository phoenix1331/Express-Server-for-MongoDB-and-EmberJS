# Express Server for MongoDB and Ember JS

I used this server to sit between MongoDB and my basic [EmberJS App](https://github.com/phoenix1331/EmberApp)

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/) (with NPM)
* [MongoDB](https://www.mongodb.com/)

## Setting up MongoDB

Download and install MongoDB (Link above)

In one terminal do:

`"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.4\mongod.cfg" --install`

Creates a `mongod.cfg` file inside `"C:\Programme Files\MongoDB\Server\3.4\"` if the following is not inside add it in.

```
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
```

You'll then need to add the folders above.

`mkdir c:\data\log\` & `mkdir c:\data\db`

`net start mongoDB` to start the service.

In another terminal do:

`"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"`

`use emberData` creates and switches to a new database called emberData (call this what you like but remember to change the endpoint in server.js)

> add mongo.exe and mongod.exe to windows PATH for future use.










`npm install` to pull in Mongoose and Express

