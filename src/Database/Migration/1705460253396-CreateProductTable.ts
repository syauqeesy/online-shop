import { MigrationInterface, QueryRunner } from "typeorm";

class CreateProductTable1705460253396 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			CREATE TABLE \`products\`(
				\`id\` CHAR(36) NOT NULL PRIMARY KEY,
				\`name\` VARCHAR(191) NOT NULL,
				\`description\` TEXT NOT NULL,
				\`created_at\` BIGINT NOT NULL,
				\`updated_at\` BIGINT NULL,
				\`deleted_at\` BIGINT NULL
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			DROP TABLE \`products\`;
    `);
  }
}

export default CreateProductTable1705460253396;
