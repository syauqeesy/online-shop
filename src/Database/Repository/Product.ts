import { Repository } from "./Repository";
import ProductEntity from "../Entity/Product";
import { ERROR_PRODUCT_NOT_FOUND } from "../../Exception/Product";
import { DateTime } from "luxon";
import { IsNull } from "typeorm";

interface ProductRepository {
  find(): Promise<ProductEntity[]>;
  findById(id: string): Promise<ProductEntity>;
  insert(product: ProductEntity): Promise<void>;
  delete(product: ProductEntity): Promise<void>;
  update(product: ProductEntity): Promise<void>;
}

class Product extends Repository implements ProductRepository {
  public async find(): Promise<ProductEntity[]> {
    return this.repository.product.find({
      where: { deleted_at: IsNull() },
    });
  }

  public async findById(id: string): Promise<ProductEntity> {
    const product = await this.repository.product.findOne({
      where: { id: id, deleted_at: IsNull() },
    });
    if (!product) {
      throw ERROR_PRODUCT_NOT_FOUND;
    }

    return product;
  }

  public async insert(product: ProductEntity): Promise<void> {
    this.repository.product.insert(product);
  }

  public async delete(product: ProductEntity): Promise<void> {
    product.deleted_at = BigInt(DateTime.now().toMillis());

    this.repository.product.save(product);
  }

  public async update(product: ProductEntity): Promise<void> {
    product.updated_at = BigInt(DateTime.now().toMillis());

    this.repository.product.save(product);
  }
}

export { ProductRepository, Product };
