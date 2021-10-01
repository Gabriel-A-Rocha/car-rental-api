import { stat, unlink } from "fs/promises";

export const deleteFile = async (filename: string) => {
  try {
    await stat(filename);
  } catch (error) {
    return;
  }
  await unlink(filename);
};
