import { MigrationInterface, QueryRunner } from "typeorm";

export class Createdescription1722279105996 implements MigrationInterface {
    name = 'Createdescription1722279105996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "description"`);
    }

}
