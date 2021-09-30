import { diskStorage } from "multer";
import { resolve } from "path";
import { randomBytes } from "crypto";

const uploadConfig = (folder: string) => {
  return {
    storage: diskStorage({
      destination: resolve(__dirname, "..", "..", folder),
      filename: (req, file, callback) => {
        const fileHash = randomBytes(16).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;
        return callback(null, fileName);
      },
    }),
  };
};

export { uploadConfig };
