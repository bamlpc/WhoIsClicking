import { Login } from "../model/models.ts";
import processedUserData from "../helper/userGenerator.ts";
import User from "../model/user.ts";
import log from "log";
import isRegister from "../helper/isUserRegister.ts"

const createUser = async (ctx: any) => {

    const data = ctx.request.body();
    const userInput = <Login> await data.value;

    const tryUsername = await isRegister(userInput.username)
//TODO: fix this condition
// checking if te email address is already in use
    if ( !tryUsername === false ) { 
        const response = {
            succes: false,
            status: 403,
            message: "that email is already in use"
           };
        ctx.response.body = JSON.stringify(response);
    }
// calling the function that hashes the password
    const [username , hashedPassword, salt, isValid] = await processedUserData( userInput );
// attempting to create the account
    try {
        if (isValid === "true") {
            await User.create(username, hashedPassword, salt);
            const response = {
            succes: true,
            body: {username, hashedPassword, salt}
            };
            ctx.response.body = JSON.stringify(response);
        }
        else {
            throw new Error // pensando si agregar o no una descripcion del error.
        }
    } catch (error) {
        log.error(error);
        ctx.response.body = {
            success: false,
            error,
            Error
        };
    }
    
}

export default createUser;