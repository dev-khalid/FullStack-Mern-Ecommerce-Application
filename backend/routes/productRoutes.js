import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();
/**@DESC    Fetch all products
 * @routes  GET /api/products/
 * @access  PUBLIC 
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);
/**@DESC    Fetch all products
 * @routes  GET /api/products/
 * @access  PUBLIC 
 */
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) { 
      res.status(404).json({
        status: 'Error'
      })
    }
    res.json(product);
  })
);

export default router;
