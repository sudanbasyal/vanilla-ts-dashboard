import { MigrationInterface, QueryRunner } from "typeorm";

export class SupplierCategory1721897914547 implements MigrationInterface {
    name = 'SupplierCategory1721897914547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "category_id" integer`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_058d29adeb5c22ceb27d18e5024" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_058d29adeb5c22ceb27d18e5024"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "category_id"`);
    }

}
