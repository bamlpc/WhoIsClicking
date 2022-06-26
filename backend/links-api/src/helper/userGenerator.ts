import log from "log";
import { validateLoginInformation } from "../utils/validation.ts";
import { bcrypt } from "deps"
import { Login } from "../model/models.ts";

//This function hashes the password

const processedUserData = async (userInformation: Login) => {
    try {
        await validateLoginInformation(userInformation);
        
        }
     catch (error) {
       log.error(error) 
    }
    const username = userInformation.username;
    const password = userInformation.password;
    const salt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt)

        return [username, hashedPassword, salt]
}

export default processedUserData;

