import { DataTypes, Model } from "sequelize";
import bcrypt from 'bcrypt'


export default (sequelize , DataTypes)=>{
    class User extends Model {
      validPassword(password){
        return bcrypt.compareSync(password , this.password);
      }
      static associate(models) {
        User.hasMany(models.ProductModel, {
          foreignKey: "userId",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
      }
     
    }
    User.init({
        username : DataTypes.STRING,
        email : DataTypes.STRING,
        password : DataTypes.STRING,
        role:DataTypes.STRING
    },{
        sequelize,
        modelName:'User',
        timestamps: true,
    hooks:{
      beforeCreate:(user)=>{
        user.password = bcrypt.hashSync(user.password , bcrypt.genSaltSync(10),null)
      }
    }
    });
    return User;
}