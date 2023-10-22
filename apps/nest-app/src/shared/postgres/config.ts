import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { join } from 'path';

export function optionsFactory(): TypeOrmModuleOptions {
  console.log(join(process.cwd(), 'src/shared/postgres/schema/*.ts'));
  
  return {
    type: process.env.DATABASE_TYPE as any,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    schema: 'public',
    entities: [join(process.cwd(), 'src/shared/postgres/schema/*.ts')],
    synchronize: false,
    autoLoadEntities: true,
    migrationsRun: true,
    verboseRetryLog: true,
    connectTimeoutMS: 10000,
    maxQueryExecutionTime: 20000,
    poolSize: 10,
  };
}

// For cli migration
export const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE as any,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  schema: 'public',
  entities: [join(process.cwd(), 'src/shared/postgres/schema/*.ts')],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: [join(process.cwd(), 'src/shared/postgres/migration/*.ts')],
});
