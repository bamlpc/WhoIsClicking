import mongoDatabase from "../helper/mongodb.ts";
import log from "log";

const links = mongoDatabase.collection("links");

class Link {
  static async create(probe: string, review: string, action: string) {
    try {
      const result = await links.insertOne({
        probe: probe,
        review: review,
        action: action,
      });
      return result;
    } catch (error) {
      log.error(error);
    }
  }
}

export default Link;
