import multer from "multer";
import path from "path";
import crypto from "crypto";
import { v2 as cloudinary } from "cloudinary";
import { Request } from "express";

import "../config/setup";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const multerConfig: any = {
  dest: path.resolve(__dirname, "..", "assets", "images"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "assets", "images"));
    },
    filename: (req: Request, file, cb: any) => {
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
      "image/jpg",
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
