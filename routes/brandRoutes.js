import express from 'express';
import {
    createBrandController, getAllBrandsController, getBrandController, updateBrandController, deleteBrandController
} from '../controllers/brandController.js';
import { isLoggedIn } from '../midlewares/isLoggedIn.js'


const brandRoutes = express.Router();
brandRoutes.post('/', isLoggedIn, createBrandController);
brandRoutes.get('/', getAllBrandsController);
brandRoutes.get('/:id', getBrandController);
brandRoutes.put('/:id', isLoggedIn, updateBrandController);
brandRoutes.delete('/:id/delete', isLoggedIn, deleteBrandController);




export default brandRoutes;