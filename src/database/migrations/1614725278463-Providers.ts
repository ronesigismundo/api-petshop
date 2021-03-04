import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Providers1614725278463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "providers",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "company",
              type: "string"
            },
            {
              name: "email",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('providers');
    }

}
