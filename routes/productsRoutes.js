import express from 'express';
import { createProductController, getProductsController, getProductController, updateProductController,deleteProductController } from '../controllers/productController.js';
import { isLoggedIn } from '../midlewares/isLoggedIn.js'


const productRoutes = express.Router();
productRoutes.post('/', isLoggedIn, createProductController);
productRoutes.get('/', getProductsController);
productRoutes.get('/:id', getProductController);
productRoutes.put('/:id', isLoggedIn, updateProductController);
productRoutes.delete('/:id/delete', isLoggedIn, deleteProductController);



export default productRoutes;