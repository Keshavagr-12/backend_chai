const { Router } = require("express");
const { registerUser,loginUser,logoutUser,refreshAccessToken } = require("../controllers/user.controller");
const { upload } = require("../middlewares/multer.middleware");
const {verifyJWT} = require("../middlewares/auth.middleware.js")

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
  registerUser,
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

module.exports = router;
