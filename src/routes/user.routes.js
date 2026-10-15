
const { Router } = require("express");
const { registerUser } = require("../controllers/user.controller");
const { upload } = require("../middlewares/multer.middleware");

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  (req, res, next) => {
    console.log("FILES RECEIVED:", req.files);
    next();
  },
  registerUser
);

module.exports = router;
