import { MigrationInterface, QueryRunner } from "typeorm";

class CreateTodoTable1705460253396 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			CREATE TABLE \`todos\`(
				\`id\` CHAR(36) NOT NULL PRIMARY KEY,
				\`title\` VARCHAR(191) NOT NULL,
				\`body\` TEXT NOT NULL,
				\`is_checked\` TINYINT(1) NOT NULL,
				\`created_at\` BIGINT NOT NULL,
				\`updated_at\` BIGINT NULL,
				\`deleted_at\` BIGINT NULL
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			DROP TABLE \`todos\`;
    `);
  }
}

export default CreateTodoTable1705460253396;
