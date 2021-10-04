const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const {PORT} = require("./config")

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());



// RUN
app.listen(PORT ,() => {
    console.log(`Server chạy ở port ${PORT}`)
});
