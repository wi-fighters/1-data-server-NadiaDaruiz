const Route = require('express').Router();
const { getRecords, addRecord, deleteRecord } = require('../controllers/controller');

Route.get('/getrecords', getRecords);

Route.post('/addrecord', addRecord);

Route.delete('/deleterecord/:id', deleteRecord)

module.exports = Route;