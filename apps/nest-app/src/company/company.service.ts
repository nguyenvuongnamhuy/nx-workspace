import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {
  CompanyRepository,
  CompanyRepositoryName,
} from '../shared/domain/repository/company.repository';
import { Company } from '../shared/domain/entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(CompanyRepositoryName)
    private readonly companyRepository: CompanyRepository
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  async findAll(): Promise<Company[]> {
    const result = await this.companyRepository.find();
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
