import { MigrationInterface, QueryRunner } from "typeorm";

export class Companystatusboolean1721915410921 implements MigrationInterface {
    name = 'Companystatusboolean1721915410921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "is_active" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "is_active" character varying NOT NULL`);
    }

}
