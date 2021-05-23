import { createConnection } from "typeorm";

export const initializeDatabaseConnection = async () => {
  const connection = await createConnection();
  return connection;
};
