import db from '../models/index.js'
const {UserModel} = db
import { generateToken } from '../utils/jwt.js';



export const singup = async (req,res)=>{
    const {username , email , password , role} = req.body;
    try{
        const existingUsername = await UserModel.findOne({where : {username}});
        if (existingUsername){
            return res.status(400).json({message : "username is already exist"})
        }

        const existingEmail = await UserModel.findOne({where : {email}});
        if (existingEmail){
            return res.status(400).json({message : "email is already exist"})
        }
        const user = await UserModel.create({
            username,
            email,
            password,
            role
        })
        return res.status(201).json({message : "user created successfully" , user})   
    }catch(error){
        console.error(error)
        res.status(500).json({error : error.message})
    }
}

//login
export const login = async(req ,res)=>{
    const {email , password} = req.body;
    try{
        const user = await UserModel.findOne({where:{email}});
        if(!user || !user.validPassword(password)){
            return res.status(401).json({message : 'Invalid Email or Password '})
        }
         const token = generateToken(user);
      
        res.cookie('token', token, { httpOnly: true,secure: true,
        sameSite: 'None',})
        res.status(200).json({ status: 200, message: 'Login successful' });

    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
    
}


//logged
export const loggedInUser = (req,res) =>{
    res.json({ user: req.user }).status(200);
       
    }

//logout
export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message:'Logged out'});
}