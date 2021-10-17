const authMiddleware = require("../middleware/auth");
const authRoute     = require("./authRoute");
const userRoute     = require("./userRoute");
const interestRoute     = require("./interestRoute");

const routerInit = (app) => {
    // router Liên quan bảo mật
    app.use("/api/auth", authRoute);
    
    // router Liên quan bảo mật
    app.use("/api/user", authMiddleware, userRoute);
    
    // router Liên quan sở thích
    app.use("/api/interest", authMiddleware, interestRoute);
    
}

module.exports = routerInit