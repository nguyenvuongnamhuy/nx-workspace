import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from '../../postgres/postgres.module';
import CompanySchema from '../../postgres/schema/company.schema';
import { CompanyRepositoryName } from './company.repository';
import { CompanyRepositoryImpl } from '../../postgres/repository/company.repository';

@Global()
@Module({
  imports: [
    PostgresModule,
    TypeOrmModule.forFeature([CompanySchema], 'INTERNAL_POSTGRES_CONNECTION'),
  ],
  providers: [
    {
      provide: CompanyRepositoryName,
      useClass: CompanyRepositoryImpl,
    },
  ],
  exports: [TypeOrmModule, CompanyRepositoryName],
})
export class RepositoryModule {}
