import { MongoClient } from 'deps';

const client = new MongoClient();
const DB_NAME = 'Whoisclicking';
const MONGO_URL = "mongodb+srv://deno:xVit62OXenMhktpN@cluster0.adchc.mongodb.net/?authMechanism=SCRAM-SHA-1";

await client.connect(MONGO_URL);
const mongoDatabase = client.database(DB_NAME);
const links = mongoDatabase.collection("links");

export class Link {

  static async create(probe: string, review: string, action: string) {
    try {
      await links.insertOne({
        probe: probe,
        review: review,
        action: action,
      });
      console.log("Data inserted");
    } catch (error) {
      throw new Error(error);
    }
  }

}