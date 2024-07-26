import { MigrationInterface, QueryRunner } from "typeorm";

export class Day1721991623122 implements MigrationInterface {
    name = 'Day1721991623122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "days" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c2c66eb46534bea34ba48cc4d7f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "days"`);
    }

}
