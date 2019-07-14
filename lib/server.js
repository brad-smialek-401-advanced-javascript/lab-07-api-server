'use strict';

const express = require('express');

require('../docs/config/swagger.js');

const app = express();

const schema = ['id', 'name', 'description', 'created', 'version'];
let db = [];



// When does this middleware run?
// What does it do?
app.use(express.json());
app.use( express.static('./public') );

let messager = (req,res,next) => {
  console.log('send this to the queue!');
  next();
};


// When does this middleware run?
app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

// Route to Get All Categories
app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Get One Category
app.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

// Route to Create a Category
app.post('/categories', messager, (req,res,next) => {
  let {name,description,created,version} = req.body;
  let record = {name,description,created,version};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

// Route to Delete a Category
app.delete('/categories/:id', messager, (req,res,next) => {
  let id = req.params.id;
  db = db.filter( (record) => record.id !== parseInt(id) );
  res.json({});
});


// Route to Update a Category
app.put('/categories/:id', messager, (req,res,next) => {
  let id = req.params.id;
  let {name,description,created,version} = req.body;
  let updatedRecord = {name,description,created,version};
  db = db.map( (record) => (record.id === parseInt(id)) ? updatedRecord : record );
  res.json(updatedRecord);
});

app.use('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({error:'Not Found'});
});

app.use((error, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({error:error});
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

