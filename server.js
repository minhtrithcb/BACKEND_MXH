const morgan = require("morgan");
const cors = require("cors");
const {PORT} = require("./config")
const routerInit = require("./routers")
const connectDB = require("./DB/connection")
const express = require('express')
const app = express()
const http = require("http").createServer(app)


// MIDDELWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// CONNECT MONGODB
connectDB();

// ROUTER INIT
routerInit(app);

// RUN
http.listen(PORT ,() => {
    console.log(`Server chạy ở port ${PORT}`)
});


