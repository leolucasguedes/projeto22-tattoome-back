import path from "path";
import multer from "multer";
import crypto from "crypto";

const multerConfig: any = {
  dest: path.resolve(__dirname, "..", "assets", "images"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("../assets/images"));
    },
    filename: (req, file, cb: any) => {
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
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
};

export default multerConfig;
