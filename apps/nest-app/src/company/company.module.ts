import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PostgresModule } from '../shared/postgres/postgres.module';
import { RepositoryModule } from '../shared/domain/repository/repository.module';

@Module({
  imports: [PostgresModule, RepositoryModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
