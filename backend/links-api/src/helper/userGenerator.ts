//realiza un control de la informacion que le llega,  crea el salt, hashea todo
import { validateLoginInformation } from "../utils/validation.ts";
import  { bcrypt } from "deps"
import log from "log";
import { Login } from "../model/models.ts";

const processedUserData = async (userInformation: Login) => {
    try {
        await validateLoginInformation(userInformation);
        
        }
     catch (error) {
       log.error(error) 
    }
    const username = userInformation.username;
    const password = userInformation.password;
    const salt: string = await bcrypt.genSalt(8);
    const hashedPassword: string = await bcrypt.hash(password, salt)

        return [username, hashedPassword, salt]
}

export default processedUserData;

