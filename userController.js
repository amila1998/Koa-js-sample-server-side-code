import { users } from "./userData.js";
import jwt from  'jsonwebtoken';
import config from "./config.js";
let message,status;


export const addData = async (ctx)=>{
    try {
        const user = await ctx.request.body;
        const {name,email}=user;
        if(!name ||!email){
            message="fill all the fields";
            status=404;
        }else{
            const exitUser = users.has(email);
            if(exitUser){
                message="Already have Data";
                status=404;
            }else{
                 users.set(email, { 
                   name: name, 
                   email: email, 
                });
                const accesstoken = createAccessToken({email: email})
                message={msg:"Adding Data Successfull !!! :)",token:accesstoken};
                status=200;
            }
        }
    } catch (error) {
        message=error;
        status=500;
    }
    ctx.body = message;
    ctx.status = status;
}

export const readAllData = async(ctx) =>{
    try {
        
        status=200;
        message=[...users.values()];
        
    } catch (err) {
        status=500;
        message=err.message;
        
    }
    ctx.body = message;
    ctx.status = status;
}

export const  getUser = async(ctx)=>{
    try {
        const user = await users.has(ctx.request.user.email);
        if(!user){
            status=400;
            message="User does not exist.";
        }else{
            const userDetails = await users.get(ctx.request.user.email);
            status=200;
            message=userDetails;
        }

    } catch (err) {
        status=500;
        message=err.message;
    }
    ctx.body = message;
    ctx.status = status;
}

const createAccessToken = (user) =>{
    return jwt.sign(user, config.ACCESS_TOKEN_SECRET , {expiresIn: '30m'})
}
