import express from 'express';
import {
    createColorController,
    getAllColorsController,
    getColorController,
    updateColorController,
    deleteColorController
} from '../controllers/colorController.js';
import { isLoggedIn } from '../midlewares/isLoggedIn.js'


const colorRoutes = express.Router();
colorRoutes.post('/', isLoggedIn, createColorController);
colorRoutes.get('/', getAllColorsController);
colorRoutes.get('/:id', getColorController);
colorRoutes.put('/:id', isLoggedIn, updateColorController);
colorRoutes.delete('/:id/delete', isLoggedIn, deleteColorController);




export default colorRoutes;