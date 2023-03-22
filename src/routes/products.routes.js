import { Router } from "express";
import { 
    addProduct,
    getProducts,
    getOneProduct,
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
    .get(getOneProduct)
    .put(updateProduct)
    .delete(deleteProduct)

export default router;