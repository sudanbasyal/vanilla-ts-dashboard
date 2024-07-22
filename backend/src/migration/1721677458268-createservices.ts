import { MigrationInterface, QueryRunner } from "typeorm";

export class Createservices1721677458268 implements MigrationInterface {
    name = 'Createservices1721677458268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "services" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "category_id" integer, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_1f8d1173481678a035b4a81a4ec" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_1f8d1173481678a035b4a81a4ec"`);
        await queryRunner.query(`DROP TABLE "services"`);
    }

}
