import { MigrationInterface, QueryRunner } from "typeorm";

export class UserSuppliers1721897722762 implements MigrationInterface {
    name = 'UserSuppliers1721897722762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "user_id"`);
    }

}
