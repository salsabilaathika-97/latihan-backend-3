const express = require("express");

const router = express();

const {db} = require('../config/dbConfig');

router.get('/', (req, res) => {
    const sqlQuery = "SELECT * FROM user"
    db.query(sqlQuery, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
});

router.get("/:id", (req, res) => {
    const dataParam = req.params;
    const sqlQuery = `SELECT * FROM user WHERE user_id = ${dataParam.id}`
    db.query(sqlQuery, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
});

module.exports = router;