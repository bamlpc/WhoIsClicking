//aca se conecta a la base de datos y guarda el usuario en la collection users
import processedUserData from "../helper/userGenerator.ts";
import User from "../model/user.ts";
import log from "log";
import { Login } from "../model/models.ts";

const createUser = async (ctx: any) => {

    const data = ctx.request.body();
    const userInput = <Login> await data.value;

    
    const [username , hashedPassword, salt] = await processedUserData( userInput );
    try {
       await User.create(username, hashedPassword, salt);
       const response = {
        succes: true,
        body: {username, hashedPassword, salt}
       };
       ctx.response.body = JSON.stringify(response);
    } catch (error) {
        log.error(error);
        ctx.response.body = {
            success: false,
            error,
        };
    }
}

export default createUser;