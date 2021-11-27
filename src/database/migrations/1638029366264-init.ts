import {MigrationInterface, QueryRunner} from "typeorm";

export class init1638029366264 implements MigrationInterface {
    name = 'init1638029366264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "age" integer NOT NULL, "companyName" character varying NOT NULL, "dni" integer NOT NULL, "numberPhone" integer NOT NULL, CONSTRAINT "PK_74029e6b1f17a4c7c66d43cfd34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publication" ("id" SERIAL NOT NULL, "heading" character varying NOT NULL, "place" character varying NOT NULL, "title" character varying NOT NULL, "dateCreated" TIMESTAMP NOT NULL, "content" character varying NOT NULL, "description" character varying NOT NULL, "employer_id" integer, CONSTRAINT "PK_8aea8363d5213896a78d8365fab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job_application" ("id" SERIAL NOT NULL, "dateCreated" TIMESTAMP NOT NULL, "content" character varying NOT NULL, "acceptedLikeACandidate" boolean NOT NULL, "accepted" boolean NOT NULL, "publication_id" integer, "employee_id" integer, CONSTRAINT "PK_c0b8f6b6341802967369b5d70f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "age" integer NOT NULL, "dni" integer NOT NULL, "numberPhone" integer NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "dateCreated" TIMESTAMP NOT NULL, "content" character varying NOT NULL, "publication_id" integer, "employee_id" integer, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "publication" ADD CONSTRAINT "FK_58342c74610d5372dd0548fb33d" FOREIGN KEY ("employer_id") REFERENCES "employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_application" ADD CONSTRAINT "FK_48c5374abd10bb1981584c9246f" FOREIGN KEY ("publication_id") REFERENCES "publication"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_application" ADD CONSTRAINT "FK_464277a0a0e31d9a7ab68fc4739" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_e76fc61accb571a4755817a27bd" FOREIGN KEY ("publication_id") REFERENCES "publication"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_5313b4370f205700cb1515e4801" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_5313b4370f205700cb1515e4801"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_e76fc61accb571a4755817a27bd"`);
        await queryRunner.query(`ALTER TABLE "job_application" DROP CONSTRAINT "FK_464277a0a0e31d9a7ab68fc4739"`);
        await queryRunner.query(`ALTER TABLE "job_application" DROP CONSTRAINT "FK_48c5374abd10bb1981584c9246f"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP CONSTRAINT "FK_58342c74610d5372dd0548fb33d"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "job_application"`);
        await queryRunner.query(`DROP TABLE "publication"`);
        await queryRunner.query(`DROP TABLE "employer"`);
    }

}
