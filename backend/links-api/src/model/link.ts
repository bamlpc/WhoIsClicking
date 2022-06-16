import mongoDatabase from "../helper/mongodb.ts";
import log from "log";

const links = mongoDatabase.collection("links");

class Link {
  static async create(hunter: string, prey: string, action: string) {
    try {
      const result = await links.insertOne({
        hunter: hunter,
        prey: prey,
        action: action,
      });
      return result;
    } catch (error) {
      log.error(error);
    }
  }
}

export default Link;
