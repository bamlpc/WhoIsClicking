import { Login } from "../model/models.ts";
import processedUserData from "../helper/userGenerator.ts";
import User from "../model/user.ts";
import log from "log";
import isRegister from "../helper/isUserRegister.ts"

const createUser = async (ctx: any) => {

// Extracting user's register information
    const data = ctx.request.body();
    const userInput = <Login> await data.value;

// Fetching mongoDB to check if the email is been used
    const tryUsername = await isRegister(userInput.username)
    const checking = JSON.parse(JSON.stringify(tryUsername)).username

    try {

         if ( userInput.username === checking ) { 
            throw "We already have an account register with that E-mail address"
         }
     
// Checking if the email and password have the right format    

        const [username , hashedPassword, salt, isValid] = await processedUserData( userInput );
        
// Creating account
         if (isValid === "true") {
            await User.create(username, hashedPassword, salt);
            const response = {
            succes: true,
            body: {username, hashedPassword, salt}
            };
            ctx.response.body = JSON.stringify(response);
        }
        else {
            throw "Invalid E-mail or password"
        }

    } catch (error) {
        log.error(error);
        ctx.response.body = {
            success: false,
            status: 403,
            error,
        };
    }
    
}

export default createUser;