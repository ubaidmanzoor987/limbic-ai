import { IDbConfig } from "@/interfaces/db.interface";

export const getDbConfig = (): IDbConfig => {
  let dbConfig: IDbConfig = {} as IDbConfig;

  try {
    dbConfig.host = process.env.DATABASE_HOST;
    dbConfig.port = Number(process.env.DATABASE_PORT) ?? 5432;
    dbConfig.database = process.env.DATABASE_NAME;
    dbConfig.user = process.env.DATABASE_USER;
    dbConfig.password = process.env.DATABASE_PASSWORD;

    console.log({ dbConfig });
    
    return dbConfig;
  } catch (error) {
    console.log({ error });
    throw new Error(
      "Unable to read database name, port, host, password from .env"
    );
  }
};
