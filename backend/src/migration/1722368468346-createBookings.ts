import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBookings1722368468346 implements MigrationInterface {
    name = 'CreateBookings1722368468346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bookings" ("id" SERIAL NOT NULL, "contact_name" character varying NOT NULL, "phone_number" character varying NOT NULL, "contact_address" character varying NOT NULL, "booked_date" date NOT NULL, "booked_time" character varying NOT NULL, "is_approved" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "cancelled_booking" TIMESTAMP, "special_instructions" text, "user_id" integer, "company_id" integer, "service_to_company_id" integer, CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_64cd97487c5c42806458ab5520c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_72dbd3365e2977161f9dec96b1a" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_c3b8850aff466e26bc414631a76" FOREIGN KEY ("service_to_company_id") REFERENCES "company_services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_c3b8850aff466e26bc414631a76"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_72dbd3365e2977161f9dec96b1a"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_64cd97487c5c42806458ab5520c"`);
        await queryRunner.query(`DROP TABLE "bookings"`);
    }

}
