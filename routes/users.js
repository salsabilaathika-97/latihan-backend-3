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

module.exports = router;