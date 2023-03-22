import { Router } from "express";
import { 
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller";
const router = Router();

router
    .route('/')
    .get(getProducts)
    .post(addProduct)

router
    .route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct)

export default router;