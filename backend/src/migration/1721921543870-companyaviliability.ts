import { MigrationInterface, QueryRunner } from "typeorm";

export class Companyaviliability1721921543870 implements MigrationInterface {
    name = 'Companyaviliability1721921543870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "aviliable_days"`);
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "opening_time"`);
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "closing_time"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "opening_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "closing_time" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "closing_time"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "opening_time"`);
        await queryRunner.query(`ALTER TABLE "company_services" ADD "closing_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_services" ADD "opening_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_services" ADD "aviliable_days" date NOT NULL`);
    }

}
