import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import fs from "fs";
import csvParse from "csv-parse";

class ImportCategoriesService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  execute(file: Express.Multer.File) {
    console.log(file);

    const readStream = fs.createReadStream(file.path);

    const parsedFile = csvParse();

    readStream.pipe(parsedFile);

    parsedFile.on("data", (chunk) => {
      console.log(chunk);
    });

    return this.categoriesRepository.list();
  }
}

export { ImportCategoriesService };
