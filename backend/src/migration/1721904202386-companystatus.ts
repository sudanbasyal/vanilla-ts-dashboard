import { MigrationInterface, QueryRunner } from "typeorm";

export class Companystatus1721904202386 implements MigrationInterface {
    name = 'Companystatus1721904202386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" RENAME COLUMN "company_status" TO "is_active"`);
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "companies" RENAME COLUMN "is_active" TO "company_status"`);
    }

}
