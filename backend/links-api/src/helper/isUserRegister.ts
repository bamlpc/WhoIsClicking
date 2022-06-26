import mongoDatabase from "../helper/mongodb.ts";
import log from "log";
import { Login } from "../model/models.ts";

const users = mongoDatabase.collection("users");

//this function looks for an email in the users collection

const isRegiter = async (username: string) => {
    try {

    const userData = await users.findOne({ username: {$in: [username]} }); // cant access any props of the DB response
    const stringify = JSON.stringify(userData);                            // cant directly parse it, first stringify
    const parse = JSON.parse(stringify);                                   // now parse the string and the props are reachable IDKWhy
    
    return parse;

    } catch (error) {
        log.error(error)
        return false
    }
}

export default isRegiter;