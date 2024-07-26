import { MigrationInterface, QueryRunner } from "typeorm";

export class Removeday1721992251023 implements MigrationInterface {
    name = 'Removeday1721992251023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "available_days"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "available_days" character varying NOT NULL`);
    }

}
