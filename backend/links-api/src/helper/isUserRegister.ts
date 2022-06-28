import mongoDatabase from "../helper/mongodb.ts";
import log from "log";

const users = mongoDatabase.collection("users");

//This function looks for an email in the users collection

const isRegiter = async (username: string) => {
  //The message that we get when the user is no register in mongoDB is not been interpreted as an error by Deno
  //it just doesnt execute the instruction, so we define:
  let userData = undefined;

  //Now if mongo doesn't return anything, we are cover

  try {
    userData = await users.findOne({ username: { $in: [username] } });

    return userData;
  } catch (error) {
    log.error(error);
    error;
  }
};

export default isRegiter;
