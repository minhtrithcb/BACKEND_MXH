const AuthController = require("../controller/AuthController");
const router = require("express").Router();

// Route Đăng nhập
router.post("/dang-nhap", AuthController.dangnhap)

// Route Đăng ký
router.post("/dang-ky", AuthController.dangky)


module.exports = router