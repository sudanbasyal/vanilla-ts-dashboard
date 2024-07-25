import { MigrationInterface, QueryRunner } from "typeorm";

export class Addaviliabledays1721921834583 implements MigrationInterface {
    name = 'Addaviliabledays1721921834583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "available_days" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "available_days"`);
    }

}
