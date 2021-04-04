import { Request, Response } from "express";
import { specificationsRepository } from ".";

class ListSpecificationsController {
  handle(req: Request, res: Response) {
    return res.status(200).json(specificationsRepository.list());
  }
}

export { ListSpecificationsController };
