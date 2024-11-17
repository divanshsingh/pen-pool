import userModel from "../models/user.model.js";
import bcrypt from "bcrypt"

export const signUp = (req, res)=>{
    const {username, email, password} = req.body;

    bcrypt.genSalt(8, (err, salt)=>{
        bcrypt.hash(password, salt, async (err, hash)=>{

            if(!username || !email || !password || username == "" || email == "" || password == ""){
                return res.status(400).send("All feild are required")
            }
        
            try {
                const newUser = await userModel.create({
                    username,
                    email,
                    password: hash
                })
            
                res.status(200).json({ success: true, message: 'User registered successfully' });

            } catch (error) {
                res.status(500).json({ success: false, message: error })
            }
        })
    })

}