import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11721622158588 implements MigrationInterface {
    name = 'Migration11721622158588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permissions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "profile_id" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_23371445bd80cb3e413089551b" UNIQUE ("profile_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_profiles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "phone_number" character varying NOT NULL, CONSTRAINT "PK_1ec6662219f4605723f1e41b6cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "category_id" integer, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_permissions" ("roles_id" integer NOT NULL, "permissions_id" integer NOT NULL, CONSTRAINT "PK_6e2ca75915d98ce434b2b40abb2" PRIMARY KEY ("roles_id", "permissions_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9f90c4016cfda36339727cf606" ON "roles_permissions" ("roles_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_41b3afc511193728bf544e2617" ON "roles_permissions" ("permissions_id") `);
        await queryRunner.query(`CREATE TABLE "user_roles" ("users_id" integer NOT NULL, "roles_id" integer NOT NULL, CONSTRAINT "PK_65ec3daed53f391c53df7e2e8fb" PRIMARY KEY ("users_id", "roles_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8e1215206acb19f1c38dbda909" ON "user_roles" ("users_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_4a08d003e00caf075a4a212d23" ON "user_roles" ("roles_id") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_23371445bd80cb3e413089551bf" FOREIGN KEY ("profile_id") REFERENCES "user_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_1f8d1173481678a035b4a81a4ec" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_9f90c4016cfda36339727cf6061" FOREIGN KEY ("roles_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_41b3afc511193728bf544e26171" FOREIGN KEY ("permissions_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_8e1215206acb19f1c38dbda9091" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_4a08d003e00caf075a4a212d23d" FOREIGN KEY ("roles_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_4a08d003e00caf075a4a212d23d"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_8e1215206acb19f1c38dbda9091"`);
        await queryRunner.query(`ALTER TABLE "roles_permissions" DROP CONSTRAINT "FK_41b3afc511193728bf544e26171"`);
        await queryRunner.query(`ALTER TABLE "roles_permissions" DROP CONSTRAINT "FK_9f90c4016cfda36339727cf6061"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_1f8d1173481678a035b4a81a4ec"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_23371445bd80cb3e413089551bf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4a08d003e00caf075a4a212d23"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8e1215206acb19f1c38dbda909"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_41b3afc511193728bf544e2617"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f90c4016cfda36339727cf606"`);
        await queryRunner.query(`DROP TABLE "roles_permissions"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "user_profiles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
    }

}
