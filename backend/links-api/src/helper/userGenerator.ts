import log from "log";
import { validateLoginInformation } from "../utils/validation.ts";
import { bcrypt } from "deps"
import { Login } from "../model/models.ts";

//This function hashes the password

const processedUserData = async (userInformation: Login) => {
    let isValid;
    try {
        await validateLoginInformation(userInformation);
        isValid = "true"
        }
     catch (error) {
       log.error(error) 
       isValid = "false"
    }
    const username = userInformation.username;
    const password = userInformation.password;
    const salt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt)

        return [username, hashedPassword, isValid]
}

export default processedUserData;

