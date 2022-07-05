import { Context } from "deps";
import {/*serviceCollection ,*/ JwtService} from "../services/services.ts";


const authMiddleware = async (
  { request, response, state}: Context,
  next: Function,
) => {
  
  try {
    //const jwtService = serviceCollection.get(JwtService);
    const jwtService = new JwtService();

    const authHeader = request.headers.get("authorization")

    if (!authHeader) {

      response.status = 401;
      response.body = {
        message: "Unauthenticated",
      };
      
      return;
    }
    
    const accessToken = authHeader.split(' ')[1];
    const payload = await jwtService.verifyAccess(accessToken);

    //  Checking for token expiration
    if (!payload) {
      response.status = 401;
      response.body = {
        message: "Unauthenticated",
      };
      
      return;
    }

    //Making User's id from accessToken available downstream
    state.userId = payload;

    await next();
    
    // Cleanup
    delete state.userId; 

    //  Checking for empty string
  } catch (_error) {;
    response.status = 401;
    response.body = {
      message: "Unauthenticated",
    };
  }
};

export default authMiddleware;
