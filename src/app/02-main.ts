import { productMemoryService } from "./services/product-memory.servicio";

const productService = new productMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'Este es un producto de belleza',
  categoryId: 12,
  images: []
});

const product = productService.getAll();
const productId = product[0].id;

productService.update(productId, {
  title: 'cambiar nombre'
});

const rta = productService.findOne(productId);
console.log(rta);
