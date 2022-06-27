import { Login } from "../model/models.ts";
import processedUserData from "../helper/userGenerator.ts";
import User from "../model/user.ts";
import log from "log";
import isRegister from "../helper/isUserRegister.ts"
import JwtService from "../services/jwt_service.ts"
import { RouterContext, bcrypt } from "deps"

class AuthController {
    constructor(
        //private mongoService: MongoService
        private jwtService: JwtService
    ){}


    async createUser ({request, response}: RouterContext<"/register">) {

    // Extracting user's register information
        const data = request.body();
        const userInput = <Login> await data.value;
    
    // Fetching mongoDB to check if the email is been used
        const tryUsername = await isRegister(userInput.username)
        console.warn(tryUsername)
       
    
        try {
    
    //This block checks if the email is available
             if ( tryUsername == undefined ) { 
                console.log("creating user")
             }
             else {
             const checking = JSON.parse(JSON.stringify(tryUsername)).username;
             if (userInput.username === checking ) { 
                throw "We already have an account register with that E-mail address"
             }
            }
         
    // Checking if the email and password have the right format    
    
            const [username , hashedPassword] = await processedUserData( userInput );
            
    // Creating account
             
            await User.create(username, hashedPassword);
            const _response = {
            succes: true,
            body: {username, hashedPassword}
            };
            response.body = JSON.stringify(_response);
            
    
        } catch (error) {
            log.error(error);
            response.body = {
                success: false,
                status: 403,
                error,
            };
        }      
    }

    async login ( {request, response, cookies}: RouterContext<"/login"> ) {

    // Extracting user's register information
        const data = request.body();
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
                const jwt = await this.jwtService.create(store._id);
                const _response = { 
                    succes: true,
                    status: 200,
                    message: "succesfully loged in",
                    //TODO: JWT review to refresh
                }
                cookies.set('jwt', jwt, { httpOnly: true });
                response.body = JSON.stringify(_response);
            }
        } catch (error) {
            const _response = {
                success: false, 
                status: 401,
                error
            }
            response.body = JSON.stringify(_response);
        }  
    }

    async user ( {response, cookies}: RouterContext<"/logged"> ) {

        const {_id}: any = await this.jwtService.verify(cookies);
        
        const databaseInformation = await isRegister(_id);

        const user = JSON.parse(JSON.stringify(databaseInformation))

        response.body = user._id;
    }

    logout ( {response, cookies}: RouterContext<"/logout"> ) {
        cookies.delete('jwt');

        response.body = {
            message: 'success'
    }
}
}



export default AuthController;