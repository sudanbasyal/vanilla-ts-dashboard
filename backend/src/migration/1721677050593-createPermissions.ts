import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePermissions1721677050593 implements MigrationInterface {
    name = 'CreatePermissions1721677050593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permissions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "permissions"`);
    }

}
