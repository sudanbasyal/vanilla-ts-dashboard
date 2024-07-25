import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAviliabledays1721923663293 implements MigrationInterface {
    name = 'UpdateAviliabledays1721923663293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "available_days"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "available_days" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "is_pending" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "is_pending" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "available_days"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "available_days" character varying(255) NOT NULL`);
    }

}
