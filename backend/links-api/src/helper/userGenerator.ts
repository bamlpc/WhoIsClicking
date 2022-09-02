import { bcrypt } from "deps";
import { Login } from "../model/models.ts";

//processedUserData adds pepper and hashes the password
const processedUserData = async (userInformation: Login, pepper: string) => {
  const username = userInformation.username;
  const password = userInformation.password + pepper;
  const salt: string = await bcrypt.genSalt();
  const hashedPassword: string = await bcrypt.hash(password, salt);

  return [username, hashedPassword];
};

export default processedUserData;
