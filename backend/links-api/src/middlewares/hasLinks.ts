import { Context } from "deps";
import JwtService from "../services/jwt_service.ts";
import mongoService from "../services/mongodb_services.ts"

const hasLinks = async (
  { response, cookies }: Context,
  next: Function,
) => {
    const jwtService = new JwtService();

    const { _id }: any = await jwtService.verify(cookies);
    const databaseInformation = await mongoService.findUser("id", _id);
    const hunter = JSON.parse(JSON.stringify(databaseInformation)).hunter;

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