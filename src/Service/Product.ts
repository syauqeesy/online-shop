import Service from "./Service";
import { ProductInfo } from "../Resource/product";
import ProductEntity from "../Database/Entity/Product";
import {
  CreateProductRequest,
  DeleteProductRequest,
  EditProductRequest,
  ShowProductRequest,
} from "../Request/product";

interface ProductService {
  list(): Promise<ProductInfo[]>;
  show(request: ShowProductRequest): Promise<ProductInfo>;
  create(request: CreateProductRequest): Promise<ProductInfo>;
  delete(request: DeleteProductRequest): Promise<void>;
  edit(request: EditProductRequest): Promise<ProductInfo>;
}

class Product extends Service implements ProductService {
  public async list(): Promise<ProductInfo[]> {
    const products = await this.repository.product.find();

    const productInfos: ProductInfo[] = [];

    products.forEach((product) => productInfos.push(product.getPublicInfo()));

    return productInfos;
  }

  public async show(request: ShowProductRequest): Promise<ProductInfo> {
    const product = await this.repository.product.findById(request.id);

    return product.getPublicInfo();
  }

  public async create(request: CreateProductRequest): Promise<ProductInfo> {
    const product = new ProductEntity();
    product.name = request.name;
    product.description = request.description;

    await this.repository.product.insert(product);

    return product.getPublicInfo();
  }

  public async delete(request: DeleteProductRequest): Promise<void> {
    const product = await this.repository.product.findById(request.id);

    this.repository.product.delete(product);
  }

  public async edit(request: EditProductRequest): Promise<ProductInfo> {
    const product = await this.repository.product.findById(request.id);
    if (request.name) product.name = request.name;
    if (request.description) product.description = request.description;

    await this.repository.product.update(product);

    return product.getPublicInfo();
  }
}

export { ProductService, Product };
