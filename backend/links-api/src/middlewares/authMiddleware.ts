import { Context } from "deps";
import JwtService from "../services/jwt_service.ts";

const authMiddleware = async (
  { response, cookies }: Context,
  next: Function,
) => {
  try {
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

    await next();

    //  Checking for empty string
  } catch (_error) {
    response.status = 401;
    response.body = {
      message: "Unauthenticated",
    };
  }
};

export default authMiddleware;
