import { MigrationInterface, QueryRunner } from "typeorm";

export class CreaterolesPermissions1721677098922 implements MigrationInterface {
    name = 'CreaterolesPermissions1721677098922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles_permissions" ("roles_id" integer NOT NULL, "permissions_id" integer NOT NULL, CONSTRAINT "PK_6e2ca75915d98ce434b2b40abb2" PRIMARY KEY ("roles_id", "permissions_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9f90c4016cfda36339727cf606" ON "roles_permissions" ("roles_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_41b3afc511193728bf544e2617" ON "roles_permissions" ("permissions_id") `);
        await queryRunner.query(`ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_9f90c4016cfda36339727cf6061" FOREIGN KEY ("roles_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_41b3afc511193728bf544e26171" FOREIGN KEY ("permissions_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles_permissions" DROP CONSTRAINT "FK_41b3afc511193728bf544e26171"`);
        await queryRunner.query(`ALTER TABLE "roles_permissions" DROP CONSTRAINT "FK_9f90c4016cfda36339727cf6061"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_41b3afc511193728bf544e2617"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f90c4016cfda36339727cf606"`);
        await queryRunner.query(`DROP TABLE "roles_permissions"`);
    }

}
