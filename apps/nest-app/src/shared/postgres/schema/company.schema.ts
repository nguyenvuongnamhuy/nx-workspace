import { EntitySchema } from 'typeorm';
import { Company } from '../../domain/entities/company.entity';

const CompanySchema = new EntitySchema<Company>({
  name: 'Company',
  tableName: 'company',
  target: Company,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    // createdAt: {
    //   type: Date,
    // },
    // updatedAt: {
    //   type: Date,
    // },
  },
});

export default CompanySchema;

// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class Company {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column()
//   address: string;

//   @Column()
//   createdAt: Date;

//   @Column()
//   updatedAt: Date;
// }

// export default CompanySchema;
