import { Repository as TypeOrmRepository } from "typeorm";
import Product from "../Entity/Product";

type typeOrmRepository = {
  product: TypeOrmRepository<Product>;
};

class Repository {
  protected readonly repository: typeOrmRepository;

  constructor(repository: typeOrmRepository) {
    this.repository = repository;
  }
}

export { typeOrmRepository, Repository };
