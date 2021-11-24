import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1636997697215 implements MigrationInterface {
  name = 'init1636997697215';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "employer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_74029e6b1f17a4c7c66d43cfd34" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "employer"`);
    await queryRunner.query(`DROP TABLE "employee"`);
  }
}
