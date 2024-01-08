import { DataTypes, Model } from "sequelize";


export default (sequelize , DataTypes)=>{
    class Product extends Model {
      static associate (models){     
        Product.belongsTo(models.UserModel)}
     
    }
  Product.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    supplier: DataTypes.STRING,
    userId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    
  });
  return Product;
};