const express = require("express");

const router = express();

const data = [
    {
        id: 1,
        name: "Rahmat",
        role: "user"
    }
]

router.get('/', (req,res) => {
    res.send(data)
})

router.post('/', (req, res) => {
    const payload = req.body;
    data.push(payload);
    res.send("Data berhasil ditambahkan")
})

module.exports = router;