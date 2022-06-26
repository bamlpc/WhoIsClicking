import mongoDatabase from "../helper/mongodb.ts";
import log from "log";

const users = mongoDatabase.collection("users");

class User {
  static async create(username: string, hashedPassword: string, salt: string) {
    try {
      const result = await users.insertOne({
        username: username,
        hashedPassword: hashedPassword,
        salt: salt
      });

      return result;
    } catch (error) {
      log.error(error);
    }
  }
}

export default User;