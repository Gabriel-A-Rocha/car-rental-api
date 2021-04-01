import { Router } from "express";
import { VolatileSpecificationsRepository } from "../modules/cars/repositories/VolatileSpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRouter = Router();

const specificationsRepository = new VolatileSpecificationsRepository();

specificationsRouter
  .route("/")

  .post((req, res) => {
    const { name, description } = req.body;

    try {
      const createSpecificationService = new CreateSpecificationService(specificationsRepository);

      const newSpecification = createSpecificationService.execute(name, description);

      return res.status(201).json(newSpecification);
    } catch (error) {
      return res.status(400).json({ error });
    }
  })

  .get((req, res) => {
    const specifications = specificationsRepository.list();

    return res.status(200).json(specifications);
  });

export { specificationsRouter };
