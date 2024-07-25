import { MigrationInterface, QueryRunner } from "typeorm";

export class CompanyToservice1721899310011 implements MigrationInterface {
    name = 'CompanyToservice1721899310011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" ADD "service_id" integer`);
        await queryRunner.query(`ALTER TABLE "company_services" ADD CONSTRAINT "FK_dbff882850c0db7ac4198292101" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_services" DROP CONSTRAINT "FK_dbff882850c0db7ac4198292101"`);
        await queryRunner.query(`ALTER TABLE "company_services" DROP COLUMN "service_id"`);
    }

}
