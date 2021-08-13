import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import fs from "fs";
import csvParse from "csv-parse";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface ICategoryUpload {
  name: string;
  description: string;
}

@injectable()
export class ImportCategoriesService {
  constructor(
    @inject("ICategoriesRepository") private categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async loadCategories(file: Express.Multer.File): Promise<ICategoryUpload[]> {
    if (file.mimetype !== "text/csv" || file.size === 0) {
      throw new AppError(400, "Invalid file");
    }

    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(file.path);

      const parsedFile = csvParse();

      readStream.pipe(parsedFile);

      const loadedCategories: Array<ICategoryUpload> = [];

      parsedFile
        .on("data", async (chunk) => {
          const [name, description] = chunk;
          loadedCategories.push({ name, description });
        })
        .on("end", () => {
          resolve(loadedCategories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);

    categories.map(async (c) => {
      const { name, description } = c;

      const record = await this.categoriesRepository.findByName(name);

      if (!record) {
        await this.categoriesRepository.create(name, description);
      }
    });

    fs.promises.unlink(file.path);
  }
}
