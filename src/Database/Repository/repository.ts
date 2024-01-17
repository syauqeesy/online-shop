import { Repository as TypeOrmRepository } from "typeorm";
import Todo from "../Entity/todo";

type typeOrmRepository = {
  todo: TypeOrmRepository<Todo>;
};

class Repository {
  protected readonly repository: typeOrmRepository;

  constructor(repository: typeOrmRepository) {
    this.repository = repository;
  }
}

export { typeOrmRepository, Repository };
