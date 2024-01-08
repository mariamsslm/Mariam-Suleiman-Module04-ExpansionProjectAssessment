import express from 'express'
import { CreateProduct , getAllProducts, getProductById , deleteProduct,editProduct} from '../controllers/product.js';
import { authenticate,checkRole } from '../middlewares/authMiddleware.js';



const productRoute = express.Router()

productRoute.post('/add',CreateProduct)
productRoute.get('/get',getAllProducts)
productRoute.get('/get/:id',getProductById )
productRoute.delete('/delete/:id',authenticate,checkRole(['cretor','admin']),deleteProduct)
productRoute.put('/edit',authenticate,checkRole(['creator','admin']),editProduct)


export default productRoute;