import path from "path";
import multer from "multer";
import crypto from "crypto";

const multerConfig = {
  dest: path.resolve("../assets/images"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("../assets/images"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMImes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];
    if (allowedMImes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
};

export default multerConfig;
