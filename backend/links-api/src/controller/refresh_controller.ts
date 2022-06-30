import {RouterContext} from "deps";
import {/*serviceCollection,*/ JwtService} from "../services/services.ts"

const tokenRefresh = async ({response, cookies}:RouterContext<"/refresh">) => {

    try {
        //const jwtService = serviceCollection.get(JwtService);
        const jwtService = new JwtService();
    
        const payload = await jwtService.verify(cookies);
    
        //  Checking for token expiration
        if (!payload) {
          response.status = 401;
          response.body = {
            message: "Unauthenticated",
          };
          return;
        }
        const { _id }: any = await jwtService.verify(cookies);
        const jwt = await jwtService.create(_id);
        const temporal = await jwtService.temporal(jwt);
        response.body = {"accessToken": temporal}
    
        //  Checking for empty string
      } catch (_error) {
        response.status = 401;
        response.body = {
          message: "Unauthenticated",
        };
      }
    
}

export default tokenRefresh;