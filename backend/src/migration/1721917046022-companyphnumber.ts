import { MigrationInterface, QueryRunner } from "typeorm";

export class Companyphnumber1721917046022 implements MigrationInterface {
    name = 'Companyphnumber1721917046022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "phone_number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "phone_number" integer NOT NULL`);
    }

}
