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

router.get('/:id', (req,res) => {
    const dataParam = req.params;
    const user = data.find(item => item.id = dataParam.id);
    res.send(user)
})

router.delete('/:id', (req, res) => {
    const dataParam = req.params;
    const user = data.filter(item => item.id != dataParam.id);
    res.send(user)
})

module.exports = router;