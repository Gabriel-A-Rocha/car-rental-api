import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface DecodedToken {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensureAuthentication(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("Missing token");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = verify(token, "1c8ec95f6dea05dd26f0235fa28c74b1") as DecodedToken;
    const userId = decodedToken.sub;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);

    if (!user) {
      throw new Error("User does not exist");
    }

    next();
  } catch (error) {
    throw new Error("Invalid token");
  }
}
