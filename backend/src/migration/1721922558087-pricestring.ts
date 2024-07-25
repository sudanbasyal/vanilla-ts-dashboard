import { MigrationInterface, QueryRunner } from "typeorm";

export class Pricestring1721922558087 implements MigrationInterface {
    name = 'Pricestring1721922558087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "company_services" ADD "price" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "company_services" ADD "price" integer NOT NULL`);
    }

}
