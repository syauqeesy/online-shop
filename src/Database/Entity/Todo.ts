import { DateTime } from "luxon";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { TodoInfo } from "../../Resource/todo";

@Entity("todos")
class Todo extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string = uuid();

  @Column({
    type: "varchar",
    length: 191,
    nullable: false,
  })
  public title!: string;

  @Column({
    type: "text",
    nullable: false,
  })
  public body!: string;

  @Column({
    type: "tinyint",
    nullable: false,
  })
  public is_checked: boolean = false;

  @Column({
    type: "bigint",
    nullable: false,
  })
  public created_at: number = DateTime.now().toMillis();

  @Column({
    type: "bigint",
    nullable: true,
  })
  public updated_at: number | null = null;

  @Column({
    type: "bigint",
    nullable: true,
  })
  public deleted_at: number | null = null;

  public getPublicInfo(): TodoInfo {
    const todoInfo: TodoInfo = {
      id: this.id,
      title: this.title,
      body: this.body,
      is_checked: this.is_checked,
      created_at: DateTime.fromMillis(+this.created_at).toISO() as string,
    };

    return todoInfo;
  }
}

export default Todo;
