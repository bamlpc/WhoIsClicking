import mongoDatabase from "../helper/mongodb.ts";
import log from "log";

const users = mongoDatabase.collection("users");

// creating account and storing it in 'users' collection

class User {
  static async create(username: string, hashedPassword: string) {
    try {
      const result = await users.insertOne({
        username: username,
        hashedPassword: hashedPassword,
      });

      return result;
    } catch (error) {
      log.error(error);
    }
  }
}

export default User;
