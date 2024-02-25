import { repository } from "../Database/Repository/main";
import { Product, ProductService } from "./Product";

type service = {
  product: ProductService;
};

const newService = (repository: repository): service => {
  const s: service = {
    product: new Product(repository),
  };

  return s;
};

export { service, newService };
