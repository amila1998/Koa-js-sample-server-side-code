import { users } from "./userData.js";
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
                message={msg:"Adding Data Successfull !!! :)"};
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
