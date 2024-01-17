import { DateTime } from "luxon";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("todos")
class Todo extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string = uuid();

  @Column({
    type: "varchar",
    length: 191,
    nullable: false,
  })
  title!: string;

  @Column({
    type: "text",
    nullable: false,
  })
  body!: string;

  @Column({
    type: "tinyint",
    length: 1,
    nullable: false,
  })
  is_checked: boolean = false;

  @Column({
    type: "bigint",
    nullable: false,
  })
  created_at: number = DateTime.now().toMillis();

  @Column({
    type: "bigint",
    nullable: true,
  })
  updated_at: number | null = null;

  @Column({
    type: "bigint",
    nullable: true,
  })
  deleted_at: number | null = null;
}

export default Todo;
