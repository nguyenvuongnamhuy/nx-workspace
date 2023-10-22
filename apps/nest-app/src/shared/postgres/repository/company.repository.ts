import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../../domain/entities/company.entity';
import { CompanyRepository } from '../../domain/repository/company.repository';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class CompanyRepositoryImpl implements CompanyRepository {
  constructor(
    @InjectRepository(Company, 'INTERNAL_POSTGRES_CONNECTION')
    private readonly repository: Repository<Company>
  ) {}

  async find(): Promise<Company[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Company> {
    return await this.repository.findOne({
      where: {
        id: Equal(id),
      },
    });
  }
}
