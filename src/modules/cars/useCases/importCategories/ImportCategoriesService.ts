import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import fs from "fs";
import csvParse from "csv-parse";

interface ICategoryUpload {
  name: string;
  description: string;
}

class ImportCategoriesService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async loadCategories(file: Express.Multer.File): Promise<ICategoryUpload[]> {
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
          reject({ err });
        });
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);

    categories.map((c) => {
      const { name, description } = c;

      const record = this.categoriesRepository.findByName(name);

      if (!record) {
        this.categoriesRepository.create(name, description);
      }
    });

    return categories;
  }
}

export { ImportCategoriesService };
