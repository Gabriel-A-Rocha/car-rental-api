export interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_licence: string;
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}
