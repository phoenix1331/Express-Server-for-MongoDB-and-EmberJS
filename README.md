# Express Server for MongoDB and Ember JS

This server sits between MongoDB and a basic [EmberJS App](https://github.com/phoenix1331/EmberApp)

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
    path: C:\data\log\mongod.log
storage:
    dbPath: C:\data\db
```

You'll then need to add the folders above.

`mkdir C:\data\log\` & `mkdir C:\data\db`

`net start mongoDB` to start the service.

In another terminal do:

`"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"`

`use emberData` creates and switches to a new database called emberData (call this what you like but remember to change the endpoint in server.js)

> add C:\Program Files\MongoDB\Server\3.4\bin to windows PATH for future use of mongo and mongod.

## Issues
If you have issues with mongod try manually shutting down mongo `use admin` and `db.shutdownServer()`
Then `mongod --dbpath /data/db --repair` should refresh the lock file

## Dependancies

`npm install` to pull in Mongoose and Express

## Start her up

Fire up `node server` from a terminal.

## Test

`curl http://localhost:4500/test/` should return "working"

## To Do

  - Add test for MongoDB connection 
  - Add other database drivers



