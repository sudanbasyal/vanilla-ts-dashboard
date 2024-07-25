import { MigrationInterface, QueryRunner } from "typeorm";

export class Category1721897339238 implements MigrationInterface {
    name = 'Category1721897339238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone_number" integer NOT NULL, "address" character varying NOT NULL, "location" character varying NOT NULL, "company_status" character varying NOT NULL, "is_pending" boolean, "deletedAt" TIMESTAMP, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
