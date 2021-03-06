import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface DecodedToken {
  iat: number;
  exp: number;
  sub: string;
}

// authentication middleware
export async function ensureAuthentication(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError(401, "Missing token");
    }

    const token = authHeader.split(" ")[1];

    const { sub: userId } = verify(token, "1c8ec95f6dea05dd26f0235fa28c74b1") as DecodedToken;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);

    if (!user) {
      throw new AppError(401, "Invalid user");
    }

    req.user = {
      id: userId,
    };

    next();
  } catch (error) {
    next(error);
  }
}
