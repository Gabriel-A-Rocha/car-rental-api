export interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_licence: string;
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}
