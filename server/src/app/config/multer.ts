// multer for file upload
import * as multer from "multer";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/product");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });