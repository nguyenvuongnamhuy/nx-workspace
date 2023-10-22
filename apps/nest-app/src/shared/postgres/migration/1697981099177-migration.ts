import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1697981099177 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('>>>>>>>>>>>>>>>>>>> run');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('>>>>>>>>>>>>>>>>>>> revert');
  }
}
