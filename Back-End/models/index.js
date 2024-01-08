import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import User from '../models/user.js'
import Product from "./product.js";
dotenv.config()




const sequelize = new Sequelize (
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host:process.env.DB_HOST,
    dialect:'mysql',
  }
);

const ProductModel = Product(sequelize , Sequelize);
const UserModel = User(sequelize, Sequelize)



const db = {
  sequelize,
  Sequelize,
  ProductModel,
  UserModel
}



//loop to test if there is association to apply association function 
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})


export default db;