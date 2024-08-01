import { validate } from "class-validator";
import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.servicio";
import { ProductHttpService } from "./product-http2.servicio";

export class ProductCRUDService{
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto){
    // Permisos
    // Logica
    // validate(dto)
    return this.http.update(id, dto);
  }
}
