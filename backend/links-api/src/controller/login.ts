import { Login } from "../model/models.ts";
import { bcrypt } from "deps";
import isRegister from "../helper/isUserRegister.ts";


const login = async ( ctx: any ) => {

// Extracting user's register information
    const data = ctx.request.body();
    const userInput = <Login> await data.value;

    try {

// Fetching mongoDB to check if the email is register
        const databaseInformation = await isRegister(userInput.username);
        
        if (databaseInformation === undefined) { 
            throw "Invalid E-mail"    
        }

// Checking the password

        const store = JSON.parse(JSON.stringify(databaseInformation))   
        const compared = await bcrypt.compare(userInput.password, store.hashedPassword)

        if (!compared){
            throw "Incorrect password"
        }

// With the right email an password:
        else {
            const response = { 
                succes: true,
                status: 200,
                message: "succesfully loged in",
                //TODO: JWT review to refresh
            }
            ctx.response.body = JSON.stringify(response);
        }
    } catch (error) {
        const response = {
            success: false, 
            status: 401,
            error
        }
        ctx.response.body = JSON.stringify(response);
    }
    
    
    
}

export default login
