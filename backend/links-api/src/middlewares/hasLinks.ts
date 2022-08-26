import { Context } from "deps";
import {/*serviceCollection,*/ MongoService} from "../services/services.ts"

const hasLinks = async (
  { response, state }: Context,
  next: Function,
) => {
    const payload = state.userId
    
    //const jwtService = serviceCollection.get(JwtService);
    //const mongoService = serviceCollection.get(MongoService);
    const mongoService = new MongoService()
    
    const databaseInformation = await mongoService.findUser("id", payload.id);
    const hunter = databaseInformation?.hunter;

    //  Checking if you have a hunter link
    if (hunter === "toBeCreated") {
        await next();
    } else {
        response.status = 200;
      response.body = {
        message: "Your account has links",
      };
      return;
    }
};

export default hasLinks;