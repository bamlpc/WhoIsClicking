//este va a ser el middleware que agarre el refreshtoken de las cookies y lo pasedownstream
//hacia el refresh controller y hacia el logout
//con eso se centraliza el manejo del token y en caso de que se modifique algo solo
//se cambia desde aca
import { Context } from "deps";
import {/*serviceCollection ,*/ JwtService} from "../services/services.ts";

const hasRefreshToken = async ( { response, cookies, state}: Context, next: Function ) => {

    const jwtService = new JwtService();

    try {
      const payload = await jwtService.verifyRefresh(cookies)

      if(!payload) {
          response.status = 401;
          response.body = {
            message: "Unauthenticated",
          };
      }

      //Making User's id from accessToken available downstream
      state.userId = payload;

      await next();
      
      // Cleanup
      delete state.userId;
    } catch (_error) {
      response.status = 401;
        response.body = {
          message: "Unauthenticated",
        };
    }
     
}

export default hasRefreshToken;