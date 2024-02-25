import { DataSource } from "typeorm";
import { Product, ProductRepository } from "./Product";
import ProductEntity from "../Entity/Product";
import { typeOrmRepository } from "./Repository";

type repository = {
  product: ProductRepository;
};

const newRepository = (dataSource: DataSource): repository => {
  const typeOrmRepository: typeOrmRepository = {
    product: dataSource.getRepository(ProductEntity),
  };

  const r: repository = {
    product: new Product(typeOrmRepository),
  };

  return r;
};

export { repository, newRepository };
