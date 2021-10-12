const UserController = require("../controller/UserController");
const router = require("express").Router();
const upload = require('../config/setupStorage')
const mutifield = [{name: "avatar",maxCount: 1},{name: "background",maxCount: 1}]

// Route danh sách user
router.get("/", UserController.getAll)

// Route lấy user login
router.get("/info", UserController.getInfo)

// Route lấy user theo id
router.get("/:id", UserController.getUserById)

// Route lấy user login
router.patch("/", upload.fields(mutifield), UserController.update)


module.exports = router