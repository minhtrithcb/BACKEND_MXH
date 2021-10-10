const UserController = require("../controller/UserController");
const router = require("express").Router();

// Route danh sách user
router.get("/", UserController.getAll)

// Route lấy user login
router.get("/info", UserController.getInfo)


module.exports = router