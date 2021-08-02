import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface AuthenticationDTO {
  email: string;
  password: string;
}

interface AuthenticationInfo {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserService {
  constructor(@inject("IUsersRepository") private usersRepository: IUsersRepository) {}

  async execute({ email, password }: AuthenticationDTO): Promise<AuthenticationInfo> {
    const userRecord = await this.usersRepository.findByEmail(email);

    if (!userRecord) {
      throw new AppError(400, "Email or password incorrect");
    }

    const passwordMatch = await compare(password, userRecord.password);

    if (!passwordMatch) {
      throw new AppError(400, "Email or password incorrect");
    }

    // temporarySecretForTesting = 1c8ec95f6dea05dd26f0235fa28c74b1
    const token = sign({}, "1c8ec95f6dea05dd26f0235fa28c74b1", {
      subject: userRecord.id,
      expiresIn: "1d",
    });

    const authenticationInfo = {
      user: {
        name: userRecord.name,
        email: userRecord.email,
      },
      token,
    };

    return authenticationInfo;
  }
}
