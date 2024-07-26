import { MigrationInterface, QueryRunner } from "typeorm";

export class Adddeletecolumn1721994307751 implements MigrationInterface {
    name = 'Adddeletecolumn1721994307751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "deletedAt"`);
    }

}
