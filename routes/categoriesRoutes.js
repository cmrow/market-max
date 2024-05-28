import express from 'express';
import {
    createCategoryController, getAllCategoriesController, getCategoryController, deleteCategoryController, updateCategoryController
} from '../controllers/categoriesController.js';
import { isLoggedIn } from '../midlewares/isLoggedIn.js'


const categoryRoutes = express.Router();
categoryRoutes.post('/', isLoggedIn, createCategoryController);
categoryRoutes.get('/', getAllCategoriesController);
categoryRoutes.get('/:id', getCategoryController);
categoryRoutes.put('/:id', isLoggedIn, updateCategoryController);
categoryRoutes.delete('/:id/delete', isLoggedIn, deleteCategoryController);




export default categoryRoutes;