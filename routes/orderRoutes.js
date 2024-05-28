import express from 'express';
import {
    createOrderController, 
    getAllOrdersController,
    getSingleOrderController,
    updateOrderController
    // getOrderController, updateOrderController, deleteOrderController
} from '../controllers/orderController.js';
import { isLoggedIn } from '../midlewares/isLoggedIn.js'


const orderRoutes = express.Router();
orderRoutes.post('/', isLoggedIn, createOrderController);
orderRoutes.get('/', isLoggedIn, getAllOrdersController);
orderRoutes.get('/:id',isLoggedIn, getSingleOrderController);
orderRoutes.put("/update/:id", isLoggedIn, updateOrderController);
// orderRoutes.put('/:id', isLoggedIn, updateOrderController);
// orderRoutes.delete('/:id/delete', isLoggedIn, deleteOrderController);




export default orderRoutes;