const express = require("express")
const userRouter = require('./routes/users')

const app = express();

app.get('/', (req, res) => {
    res.send("Halo, saya bukan bjorka")
})

app.use('/users', userRouter)

const PORT = 1001;

app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}`);
})