import log from "log";
import getRandomString from "../helper/randomString.ts"
import { RouterContext } from "deps";
import {/*serviceCollection,*/ MongoService} from "../services/services.ts"

const generateLinks = async ({ response, state }: RouterContext<"/generate">) => {
  const newLink = {
    hunter: getRandomString(50),
    prey: getRandomString(50),
    action: "",
  };

  //const mongoService = serviceCollection.get(MongoService);
  //const jwtService = serviceCollection.get(JwtService);

  const mongoService = new MongoService();

  const payload = state.userId
  
  try {

    //saving the links in the link collection
    await mongoService.createLinks(newLink.hunter, newLink.prey, newLink.action);

    // updating the user's hunter link IF the user is logged
    if(payload){await mongoService.associateHunter(newLink.hunter, payload.id)}

    const _response = {
      success: true,
      newLink,
    };
    response.body = JSON.stringify(_response);

  } catch (error) {
    log.error(error);
    response.body = {
      success: false,
      payload,
    };
  }
};

export default generateLinks;
