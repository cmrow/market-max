import express from 'express';
import {
    createReviewController
} from '../controllers/reviewController.js';
import { isLoggedIn } from '../midlewares/isLoggedIn.js'


const reviewRoutes = express.Router();
reviewRoutes.post('/:productID', isLoggedIn, createReviewController);
// reviewRoutes.get('/', getAllReviewsController);
// reviewRoutes.get('/:id', getReviewController);
// reviewRoutes.put('/:id', isLoggedIn, updateReviewController);
// reviewRoutes.delete('/:id/delete', isLoggedIn, deleteReviewController);




export default reviewRoutes;