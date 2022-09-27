const express = require("express")

const app = express();

app.get('/', (req, res) => {
    res("Halo, saya bukan bjorka")
})

const PORT = 1001;

app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}`);
})