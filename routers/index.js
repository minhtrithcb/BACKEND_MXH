const authMiddleware = require("../middleware/auth");
const authRoute     = require("./authRoute");
const userRoute     = require("./userRoute");

const routerInit = (app) => {
    // router Liên quan bảo mật
    app.use("/api/auth", authRoute);
    
    // router Liên quan bảo mật
    app.use("/api/user", authMiddleware, userRoute);
    
}

module.exports = routerInit