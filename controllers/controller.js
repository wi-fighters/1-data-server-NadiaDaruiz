const db = require('../model/database');


const getRecords = (req, res) => {
    const allRecords = db.get('Records').value();
    res.json(allRecords)
}


const addRecord = (req, res) => {
    const newRecord = req.body;
    console.log(newRecord)

    // why I need db.get('Records') can I do a variable for this?
    db.get('Records').push(newRecord).write();

    let allRecords = db.get('Records').value();
    res.json(allRecords);
}

const deleteRecord = (req, res) => {

    // always parseINT cause in general json gives u strings!!!

    const recordId = parseInt(req.params.id);
    console.log(recordId)

    // and when removing I need to pass an object!!

    db.get('Records').remove({ id: recordId }).write();

    let allRecords = db.get('Records').value();
    res.json(allRecords)

}

module.exports = { getRecords, addRecord, deleteRecord }