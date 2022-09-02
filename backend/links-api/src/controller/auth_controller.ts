import { Login } from "../model/models.ts";
import processedUserData from "../helper/userGenerator.ts";
import log from "log";
import JwtService from "../services/jwt_service.ts";
import { bcrypt, RouterContext, ObjectId /*, Service, Inject*/} from "deps";
import MongoService from "../services/mongodb_services.ts";

const pepper = Deno.env.get("PEPPER")!

//@Service()
class AuthController {
  constructor(
    private jwtService: JwtService,
    private mongoService: MongoService
  ) {}
  

  ////////////////////////////// CREATE ACCOUNT ////////////////////////////////////////////////////
  async createUser({ request, response }: RouterContext<"/register">) {
    // Extracting user's register information
    const data = request.body();
    const userInput = <Login> await data.value;

    // Fetching mongoDB to check if the email is been used
    const tryUsername = await this.mongoService.findUser("email", userInput.username);

    try {
      //This block checks if the email is available
      if (tryUsername === undefined) {
        
        // Checking if the email and password have the right format

        const [username, hashedPassword] = await processedUserData(userInput, pepper);

        // Creating account
        const _id = new ObjectId()

        await this.mongoService.createUser(_id, username, hashedPassword, "toBeCreated");
        const _response = {
          succes: true,
        };

        response.body = JSON.stringify(_response);
      } else {
        const checking = JSON.parse(JSON.stringify(tryUsername)).username;
        if (userInput.username === checking) {
          throw "We already have an account register with that E-mail address";
        }
      }
    } catch (error) {
      log.error(error);
      response.body = {
        success: false,
        status: 403,
        error,
      };
    }
  }

  ////////////////////////////// LOGIN /////////////////////////////////////////////////////////////
  async login({ request, response, cookies }: RouterContext<"/login">) {
    // Extracting user's register information
    const data = request.body();
    const userInput = <Login> await data.value;

    try {
      // Fetching mongoDB to check if the email is register
      const databaseInformation = await this.mongoService.findUser("email", userInput.username);

      if (databaseInformation === undefined) {
        throw "Invalid E-mail";
      }

      // Checking the password
      const store = JSON.parse(JSON.stringify(databaseInformation));
      const compared = await bcrypt.compare(
        userInput.password + pepper,
        store.hashedPassword,
      );

      if (!compared) {
        throw "Incorrect password";
      } // With the right email an password:
      else {
        //creating jwt tokens
        const refreshToken = await this.jwtService.refreshToken( store._id );
        const accessToken = await this.jwtService.accessToken( store._id );
        
        //saving refreshToken on mongo
        await this.mongoService.associateRefreshToken(refreshToken, store._id )
        
        //sending refreshToken as http only cookie
        cookies.set("jwt", refreshToken, { httpOnly: true });
        
        //sending access token in json
        const _response = {
          succes: true,
          status: 200,
          message: { "roles": store.roles,"hunter": store.hunter , "accessToken": accessToken},
        };

        response.body = JSON.stringify(_response);
      }
    } catch (error) {
      const _response = {
        success: false,
        status: 401,
        error,
      };
      response.body = JSON.stringify(_response);
    }
  }

  async user({ response, cookies }: RouterContext<"/user">) {
    //TODO: this function is just a placeholder ATM
    const { _id }: any = await this.jwtService.verifyRefresh(cookies);
    const databaseInformation = await this.mongoService.findUser("id", _id);
    const user = JSON.parse(JSON.stringify(databaseInformation));
    response.body = user._id;
  }


  ////////////////////////////// LOGOUT ////////////////////////////////////////////////////////////
  async logout({ response, cookies, state }: RouterContext<"/user/logout">) {

    const payload = state.userId

    //Deleting the refresh token from mongo
    await this.mongoService.deleteRefreshToken(payload)
    
    //Deleting refresh token from cookies
    cookies.delete("jwt");
    response.headers.delete("Authorization")
    response.body = {
      message: "success",
    };
  }
}

//serviceCollection.addTransient(AuthController)

export default AuthController;