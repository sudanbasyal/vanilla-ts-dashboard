import { MigrationInterface, QueryRunner } from "typeorm";

export class ComanyServices1721898291877 implements MigrationInterface {
    name = 'ComanyServices1721898291877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company_services" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "aviliable_days" date NOT NULL, "opening_time" character varying NOT NULL, "closing_time" character varying NOT NULL, "description" character varying, "deletedAt" TIMESTAMP, "company_id" integer, CONSTRAINT "PK_25fc94c7e4cfcf84d772c76c68e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "photo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "pan_photo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_services" ADD CONSTRAINT "FK_b5571c5712b23fe34e7e7dda8ed" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" DROP CONSTRAINT "FK_b5571c5712b23fe34e7e7dda8ed"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "pan_photo"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "photo"`);
        await queryRunner.query(`DROP TABLE "company_services"`);
    }

}
