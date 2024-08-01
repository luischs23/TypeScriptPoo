import { ProductHttpService } from "./services/product-http.servicio";

(async()=>{

  const productService = new ProductHttpService();

  try {

  console.log('---'.repeat(10));
  console.log('getAll');

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map(item => item.price));

  const productId = products[0].id;
  console.log('---'.repeat(10));
  console.log('update');
  await productService.update(productId,{
    price:100,
    title: 'New title',
    description: 'New Descripción'
  });

  console.log('---'.repeat(10));
  console.log('findOne');
  const product = await productService.findOne(productId);
  console.log(product);

  } catch (error) {
    console.error(error);
  }

})();

