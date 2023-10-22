import { Company } from '../entities/company.entity';

export const CompanyRepositoryName = 'CompanyRepositoryName.Interface';

export interface CompanyRepository {
  find(): Promise<Company[]>;
  findOne(id: number): Promise<Company>;
}
