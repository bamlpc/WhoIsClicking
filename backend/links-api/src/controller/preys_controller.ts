import { RouterContext } from "deps";
import mongoService from "../services/mongodb_services.ts"
import JwtService from "../services/jwt_service.ts"

const preys = async ({ response, cookies }: RouterContext<"/preys">) => {
    const jwtService = new JwtService();

    const { _id }: any = await jwtService.verify(cookies);
    console.warn("this is the id:", _id);
    

    const databaseInformation = await mongoService.findUser("id", _id);
    console.warn("this is the db:", databaseInformation);
    

    const hunter = JSON.parse(JSON.stringify(databaseInformation)).hunter;
    console.warn("this is the hunter:", hunter);
    
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