import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGameTable1703805730782 implements MigrationInterface {
    name = 'CreateGameTable1703805730782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "game" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "minPlayers" integer NOT NULL, "maxPlayers" integer NOT NULL, "timeToPlayInMinutes" integer NOT NULL, "description" character varying NOT NULL, "milestones" jsonb NOT NULL DEFAULT '[]', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "gameTest" boolean NOT NULL DEFAULT true, "photoId" uuid, CONSTRAINT "UQ_5d1e08e04b97aa06d671cd58409" UNIQUE ("name"), CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "game" ADD CONSTRAINT "FK_3aae3752d8e0adf53abc9b36454" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP CONSTRAINT "FK_3aae3752d8e0adf53abc9b36454"`);
        await queryRunner.query(`DROP TABLE "game"`);
    }

}