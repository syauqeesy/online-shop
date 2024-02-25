import { DateTime } from "luxon";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { ProductInfo } from "../../Resource/product";

@Entity("products")
class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string = uuid();

  @Column({
    type: "varchar",
    length: 191,
    nullable: false,
  })
  public name!: string;

  @Column({
    type: "text",
    nullable: false,
  })
  public description!: string;

  @Column({
    type: "bigint",
    nullable: false,
  })
  public created_at: bigint = BigInt(DateTime.utc().toMillis());

  @Column({
    type: "bigint",
    nullable: true,
  })
  public updated_at: bigint | null = null;

  @Column({
    type: "bigint",
    nullable: true,
  })
  public deleted_at: bigint | null = null;

  public getPublicInfo(): ProductInfo {
    const productInfo: ProductInfo = {
      id: this.id,
      name: this.name,
      description: this.description,
      created_at: DateTime.fromMillis(
        Number(this.created_at)
      ).toISO() as string,
    };

    return productInfo;
  }
}

export default Product;
