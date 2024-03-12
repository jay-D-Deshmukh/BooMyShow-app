import User from "../models/user.model.js"
import bcrypt from  'bcrypt';
import  jwt  from "jsonwebtoken";

export const  register=async(req,res)=>{
    const userData = req.body;
    userData.password = await bcrypt.hash(userData.password, 10);
    const data = await User.create(userData);
    res.status(201).send({status:true, message:'successfully registered!'});
}

export const  login= async(req,res)=>{
    const {email,password}=req.body;
    const userData = await User.findOne({ email:email.toLowerCase()}).select('+password');
    // console.log(userData);
    if (!userData){
         res.status(401).send({status:false, message:`Invalid credentials!`});
         return;
    }
    if(!bcrypt.compare( password,userData.password)){
        res.status(401).send({status: false,message:"Invalid credentials!"});
        return;
    }

    //when i login i should be able to store that info into token
    //Generate JWT token in cookie
    const jwtToken = await userData.generateJWTToken();

    res.cookie('token',jwtToken,{
        maxAge: 2*24*60*1000, // expiry of cookie in ms
    } )
    //put JWT token in cookie


    res.status(200).send({status : true ,message:`successfully loggedIn`});
    
}


// export const  getProfile=async(req,res)=>{
//     const {token}=req.cookies;
//     console.log(token);
//     const tokenDetails = jwt.verify(token, process.env.JWT_PASSWORD);

//     const userDetail = await User.findById(tokenDetails.id);

//     res.status(200).send(userDetail);
// }


export const  getProfile=async(req,res)=>{
    const userId = req.user.id;
    const userDetail = await User.findById(userId);

    res.status(200).send(userDetail);
}

// Header have cookie, cookie have token, using token we extraxt the details of user