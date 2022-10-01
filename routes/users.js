const e = require("express");
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

router.post("/", (req, res) => {
    const dataBody = req.body;

    const sqlQuery = `INSERT INTO user(user_name, user_email, user_password) VALUE(?,?,?);`;
    
    db.query(sqlQuery, [dataBody.user_name, dataBody.user_email, dataBody.user_password], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

router.put("/:id", (req, res) => {
    const dataBody = req.body;
    const dataParam = req.params;
    const sqlQuery = `UPDATE user SET user_name = ?, user_email = ?, user_password = ? WHERE user_id = ${dataParam.id}`;

    db.query(sqlQuery, [dataBody.user_name, dataBody.user_email, dataBody.user_password], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

router.delete("/:email", (req,res) => {
    const dataParam = req.params;
    const sqlQuery = `DELETE FROM user WHERE user_email = ?`

    db.query(sqlQuery, [dataParam.email], (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

module.exports = router;