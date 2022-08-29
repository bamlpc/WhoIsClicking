import {RouterContext} from "deps";
import {/*serviceCollection,*/ JwtService} from "../services/services.ts"

const tokenRefresh = async ({response, state}:RouterContext<"/refresh">) => {

    try {
        //const jwtService = serviceCollection.get(JwtService);
        const jwtService = new JwtService();

        const payload = state.userId

          //Getting a new access token
          const accessToken = await jwtService.accessToken(payload.id); 
          //Returning the new token
          response.body = {"accessToken": accessToken}
          return;
    
        //  If any error..
      } catch (_error) {
        response.status = 401;
        response.body = {
          message: "Unauthenticated",
        };
      }
    
}

export default tokenRefresh;