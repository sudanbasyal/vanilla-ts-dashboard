import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangebookedDate1722403540620 implements MigrationInterface {
    name = 'ChangebookedDate1722403540620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" DROP COLUMN "booked_date"`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD "booked_date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" DROP COLUMN "booked_date"`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD "booked_date" date NOT NULL`);
    }

}
