import log from "log";
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
    // updating the user's hunter link
    await mongoService.associateHunter(newLink.hunter, payload.id)
    const _response = {
      success: true,
      newLink,
    };
    response.body = JSON.stringify(_response);

  } catch (error) {
    log.error(error);
    response.body = {
      success: false,
      error,
    };
  }
};

function getRandomString(s: number) {
  if (s % 2 == 1) {
    log.warning("Only even sizes are supported");
  }
  const buf = new Uint8Array(s / 2);
  crypto.getRandomValues(buf);
  let ret = "";
  for (let i = 0; i < buf.length; ++i) {
    ret += ("0" + buf[i].toString(16)).slice(-2);
  }
  return ret;
}

export default generateLinks;
