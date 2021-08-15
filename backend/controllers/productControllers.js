import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
/**@DESC    Fetch all products
 * @routes  GET /api/products/
 * @access  PUBLIC 
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
/**@DESC    Fetch all products
 * @routes  GET /api/products/
 * @access  PUBLIC 
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product Not Found!');
  }
  res.json(product);
});

export { getProducts, getProductById };
