import log from "log";
import { RouterContext } from "deps";
import {/*serviceCollection,*/ JwtService, MongoService} from "../services/services.ts"

const generateLinks = async ({ response, cookies }: RouterContext<"/generate">) => {
  const newLink = {
    hunter: getRandomString(50),
    prey: getRandomString(50),
    action: "",
  };

  //const mongoService = serviceCollection.get(MongoService);
  //const jwtService = serviceCollection.get(JwtService);

  const mongoService = new MongoService();
  const jwtService = new JwtService();

  const { _id }: any = await jwtService.verify(cookies);
  //const databaseInformation = await mongoService.findUser("id", _id);

  try {
    await mongoService.createLinks(newLink.hunter, newLink.prey, newLink.action);
    // TODO: asociar el link hunter a la cuenta que llamó la acción con _id
    await mongoService.associateHunter(newLink.hunter, _id)
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
