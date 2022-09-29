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

module.exports = router;