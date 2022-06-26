import mongoDatabase from "../helper/mongodb.ts";
import { bcrypt } from "deps"
import { Login } from "../model/models.ts";

const users = mongoDatabase.collection("users");

const login = async ( ctx: any ) => {

    const data = ctx.request.body();
    const userInput = <Login> await data.value;

    console.warn("inicio test", userInput)
    const username = userInput.username;
    const password = userInput.password;
    console.warn("primer checkpoint", username, password);
    const userData = await users.findOne({ username: username });
    const storeUsername = userData!.username;
    const storeHash = userData!.hashedPassword;
    console.warn("segundo checkpoint", storeUsername, storeHash)
    const storeSalt = userData!.salt;
    const hashedPassword = await bcrypt.hash(password, storeSalt)
    const result = await bcrypt.compare(hashedPassword, storeHash);
    console.warn("tercer checkpoint", hashedPassword)
    console.warn("tercer checkpoint", storeHash)
    console.warn("cuarto checkpoint", result);
    if (!username === storeUsername ) {
        new Error
        ctx.response.body = {
            success: false, 
            status: 401,
            message: "Invalid username"
    }} else if (!result){
        new Error
        ctx.response.body = {
            success: false, 
            status: 401,
            message: "Incorrect password"
    }}
    else {
        ctx.response.body = {
            succes: true,
            status: 200,
            message: "succesfully loged in",
            data: {
                username: username,
                password:  password
            }
        }
    }
    
    
}

export default login
