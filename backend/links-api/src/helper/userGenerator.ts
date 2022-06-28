import { bcrypt } from "deps";
import { Login } from "../model/models.ts";

//This function hashes the password

const processedUserData = async (userInformation: Login) => {
  const username = userInformation.username;
  const password = userInformation.password;
  const salt: string = await bcrypt.genSalt();
  const hashedPassword: string = await bcrypt.hash(password, salt);

  return [username, hashedPassword];
};

export default processedUserData;
