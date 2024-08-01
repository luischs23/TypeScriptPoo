import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "./../models/category.model";
import { Product } from "./../models/product.model";
import axios from "axios";

export class BaseHttpService<TypeClass>{
  // data: TypeClass[] = [];

  constructor(
    protected url: string
  ){}

  async getAll(){
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO){
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new baseHttpService<string>();
// service.getAll()

// const service1 = new baseHttpService<Category>();
// service1.getAll()

(async()=>{

  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll();
  console.log('products', rta.length);
  productService.update<Product['id'], UpdateProductDto>(48, {
    title: 'asa'
  })

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta1 = await categoryService.getAll();
  console.log('categories', rta1.length);
})();
