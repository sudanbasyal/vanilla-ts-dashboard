import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateuserRoles1721677198507 implements MigrationInterface {
    name = 'CreateuserRoles1721677198507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_roles" ("users_id" integer NOT NULL, "roles_id" integer NOT NULL, CONSTRAINT "PK_65ec3daed53f391c53df7e2e8fb" PRIMARY KEY ("users_id", "roles_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8e1215206acb19f1c38dbda909" ON "user_roles" ("users_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_4a08d003e00caf075a4a212d23" ON "user_roles" ("roles_id") `);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_8e1215206acb19f1c38dbda9091" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_4a08d003e00caf075a4a212d23d" FOREIGN KEY ("roles_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_4a08d003e00caf075a4a212d23d"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_8e1215206acb19f1c38dbda9091"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4a08d003e00caf075a4a212d23"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8e1215206acb19f1c38dbda909"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
    }

}
