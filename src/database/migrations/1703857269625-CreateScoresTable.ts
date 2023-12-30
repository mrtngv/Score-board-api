import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateScoresTable1703857269625 implements MigrationInterface {
    name = 'CreateScoresTable1703857269625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "score" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "milestones" jsonb NOT NULL DEFAULT '[]', "userId" integer, "playId" integer, "photoId" uuid, CONSTRAINT "PK_1770f42c61451103f5514134078" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_327e5a5890df4462edf4ac9fa3" ON "score" ("userId") `);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_327e5a5890df4462edf4ac9fa30" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_a4b1b32d2c961721ffb9c985430" FOREIGN KEY ("playId") REFERENCES "play"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_25ba2dc83f87bfca93c2783b6a4" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_25ba2dc83f87bfca93c2783b6a4"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_a4b1b32d2c961721ffb9c985430"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_327e5a5890df4462edf4ac9fa30"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_327e5a5890df4462edf4ac9fa3"`);
        await queryRunner.query(`DROP TABLE "score"`);
    }

}