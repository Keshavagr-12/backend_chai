
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir =
  "C:/Users/kesha/OneDrive/Desktop/Backend-Chai/public/temp";

fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() +
      "-" +
      file.fieldname +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

module.exports = { upload };
  