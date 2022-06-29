import { Login } from "../model/models.ts";
import processedUserData from "../helper/userGenerator.ts";
import log from "log";
import JwtService from "../services/jwt_service.ts";
import { bcrypt, Inject, RouterContext, Service, Bson } from "deps";
import MongoService from "../services/mongodb_services.ts";

//@Service()
class AuthController {
  constructor(
    //private mongoService: MongoService
    // @Inject()
    private mongoService: MongoService,
    private jwtService: JwtService,
  ) {}

  async createUser({ request, response }: RouterContext<"/register">) {
    // Extracting user's register information
    const data = request.body();
    const userInput = <Login> await data.value;

    // Fetching mongoDB to check if the email is been used
    const tryUsername = await this.mongoService.findUser("email", userInput.username);

    try {
      //This block checks if the email is available
      if (tryUsername == undefined) {
        console.log("creating user");
      } else {
        const checking = JSON.parse(JSON.stringify(tryUsername)).username;
        if (userInput.username === checking) {
          throw "We already have an account register with that E-mail address";
        }
      }

      // Checking if the email and password have the right format

      const [username, hashedPassword] = await processedUserData(userInput);

      // Creating account

      await this.mongoService.createUser(username, hashedPassword, "toBeCreated");
      const _response = {
        succes: true,
        body: { username, hashedPassword },
      };
      response.body = JSON.stringify(_response);
    } catch (error) {
      log.error(error);
      response.body = {
        success: false,
        status: 403,
        error,
      };
    }
  }

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
        userInput.password,
        store.hashedPassword,
      );

      if (!compared) {
        throw "Incorrect password";
      } // With the right email an password:
      else {
        const jwt = await this.jwtService.create(store._id);
        const temporal = await this.jwtService.temporal(jwt);
        const _response = {
          succes: true,
          status: 200,
          message: { "roles": store.roles, "accessToken": temporal},
        };
        cookies.set("jwt", jwt, { httpOnly: true });
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
    const { _id }: any = await this.jwtService.verify(cookies);

    const databaseInformation = await this.mongoService.findUser("id", _id);

    const user = JSON.parse(JSON.stringify(databaseInformation));

    response.body = user._id;
  }

  logout({ response, cookies }: RouterContext<"/user/logout">) {
    cookies.delete("jwt");

    response.body = {
      message: "success",
    };
  }
}

//serviceCollection.addTransient(AuthController)

export default AuthController;
