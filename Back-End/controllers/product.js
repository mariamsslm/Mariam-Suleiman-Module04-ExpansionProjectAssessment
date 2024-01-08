import db from "../models/index.js";
const {ProductModel,UserModel} = db



//create new product
export const CreateProduct= async(req,res)=>{
  
    const{title , category,description,price,supplier,userId}= req.body

    try{
        if(!title || !category || !description || !price || !supplier || !userId){
            return res.status(400).json({ error: "Missing required" });
    }
    const newProduct = await ProductModel.create({
        title , 
        category,
        description,
        price,
        supplier,
        userId
    });
    res.status(200).json({ message: "Product added successfuly", data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};




//get  all products
export const getAllProducts = async (req, res) => {
    try {
      const getProducts = await ProductModel.findAll({ include: [UserModel] });
      res.status(200).json({ message: "Get all Products", data: getProducts });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  };


// get product by id 
export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      const getById = await ProductModel.findByPk(id, { include: [UserModel] });
      if (getById) {
        res.status(200).json({ data: getById });
      } else {
        res.status(404).json(`message: Products with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  };


  //delete product by id 
  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        await product.destroy();
        res.status(200).json({ message: 'product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// edit product
export const editProduct =async(req , res)=>{
  const {id , title , category,description,price,supplier}= req.body
  try{
    const product = await ProductModel.findByPk(id)
    if(!product){
      return res.status(404).json({ error: 'Product not found' });
    }
    const editProduct = await ProductModel.update(    {
      title , 
      category,
      description,
      price,
      supplier
    },
    {
      where: { id: id,},
    }
  );

  if (editProduct[0] > 0) {
    return res.status(200).json({ message: 'Product updated successfully' });
  } else {
    return res.status(400).json({ error: 'Error updating product' });
  }
} catch (error) {
  console.error(error);
  return res.status(500).json({ error: error.message });
}
};
  

        
    


