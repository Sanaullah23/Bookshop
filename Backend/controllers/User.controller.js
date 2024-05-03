import User from "../model/User.model.js";
import bcrypt from 'bcrypt'
export const signUp =async(req, res)=>{
   try {
    const {fullname, email, password} = req.body;
    const findUser = await User.findOne({email})
    if (findUser) {
        res.status(400).json({
            success:false,
            message:"user already exist"
        });
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser= await User.create({
        fullname,
        email,
        password:hashedPassword
    });
    res.status(201).json({
        success:true,
        message:"user created successfully",
        data:createdUser
    });
   } catch (error) {
    res.status(500).json({
        success:false,
        message:"internal server error",
        error:error
    });
   }
    
}