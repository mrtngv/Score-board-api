import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePlaysTable1703854525842 implements MigrationInterface {
    name = 'CreatePlaysTable1703854525842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "play" ("id" SERIAL NOT NULL, "playedAt" TIMESTAMP NOT NULL DEFAULT now(), "gameId" integer, "photoId" uuid, CONSTRAINT "PK_78bc0ac5050cc1068217341a73e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "play" ADD CONSTRAINT "FK_efadaaeaf50363801fd2ebcd6f4" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "play" ADD CONSTRAINT "FK_498633b7a10673d63b4ae1d87fc" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "play" DROP CONSTRAINT "FK_498633b7a10673d63b4ae1d87fc"`);
        await queryRunner.query(`ALTER TABLE "play" DROP CONSTRAINT "FK_efadaaeaf50363801fd2ebcd6f4"`);
        await queryRunner.query(`DROP TABLE "play"`);
    }

}