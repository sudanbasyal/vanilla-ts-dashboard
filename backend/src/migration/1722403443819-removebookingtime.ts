import { MigrationInterface, QueryRunner } from "typeorm";

export class Removebookingtime1722403443819 implements MigrationInterface {
    name = 'Removebookingtime1722403443819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" DROP COLUMN "booked_time"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" ADD "booked_time" character varying NOT NULL`);
    }

}
