import { repository } from "../Database/Repository/main";

class Service {
  protected readonly repository: repository;

  constructor(repository: repository) {
    this.repository = repository;
  }
}

export default Service;
