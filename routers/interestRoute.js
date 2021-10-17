const InterestController = require("../controller/InterestController");
const router = require("express").Router();

// Route lấy danh sách sở thích
router.get("/", InterestController.getAll)

// Route thêm sở thích
router.post("/", InterestController.create)


module.exports = router