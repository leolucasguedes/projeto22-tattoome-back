import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import fs from "fs";

import "../config/setup";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function uploadToCloudinary(locaFilePath: any) {
  let uploadedFile: UploadApiResponse;
  try {
    uploadedFile = await cloudinary.uploader.upload(locaFilePath, {
      folder: "references",
      resource_type: "auto",
    });
  } catch (error) {
    console.log(error.message);
    fs.unlinkSync(locaFilePath);
    return { message: "Cloudnary Error" };
  }
  fs.unlinkSync(locaFilePath);
  const { secure_url } = uploadedFile;

  return secure_url;
}
