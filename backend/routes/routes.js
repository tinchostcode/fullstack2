import express from 'express' 
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/ProductoController.js';

const router= express.Router()

/////////////////definir rutas forma 1////////////////////////////

router.get("/",getProducts)
router.get("/:id",getProduct)
router.put("/:id",updateProduct)
router.post("/",createProduct)
router.delete("/:id",deleteProduct)

/////////////////definir rutas forma 2//////////////////////
//router.route("/").get(getProducts).post(createProduct)
//router.route("/:id").put(updateProduct).get(getProduct).delete(deleteProduct)

export default router
