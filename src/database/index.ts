import { createConnection } from "typeorm";

export const initializeDatabaseConnection = async () => {
  await createConnection();
};
