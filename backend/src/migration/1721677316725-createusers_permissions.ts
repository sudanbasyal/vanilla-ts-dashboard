import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateusersPermissions1721677316725 implements MigrationInterface {
    name = 'CreateusersPermissions1721677316725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_profiles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "phone_number" character varying NOT NULL, CONSTRAINT "PK_1ec6662219f4605723f1e41b6cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_id" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_23371445bd80cb3e413089551bf" UNIQUE ("profile_id")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_23371445bd80cb3e413089551bf" FOREIGN KEY ("profile_id") REFERENCES "user_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_23371445bd80cb3e413089551bf"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_23371445bd80cb3e413089551bf"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_id"`);
        await queryRunner.query(`DROP TABLE "user_profiles"`);
    }

}
