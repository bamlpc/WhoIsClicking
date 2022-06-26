import { bcrypt } from "deps"
import { Login } from "../model/models.ts";



const login = async ( ctx: any ) => {

    const data = ctx.request.body();
    const userInput = <Login> await data.value;

    
    if (!userInput.username) { //TODO: HERE WE CHECK IF THE EMAIL IS REGISTER
        new Error
        ctx.response.body = {
            success: false, 
            status: 401,
            message: "Invalid username"
    }} else if (!userInput.password){ //TODO: HERE SHOULD BE WHERE WE CHECK FOR PASSWORD MATCH
        new Error
        ctx.response.body = {
            success: false, 
            status: 401,
            message: "Incorrect password"
    }}
    else {
        ctx.response.body = { //IF THE EMAIL IS REGISTER AND THE PASSWORD IS CORRECT, THEN:
            succes: true,
            status: 200,
            message: "succesfully loged in",
            //TODO: JWT review to refresh
        }
    }
    
    
}

export default login
