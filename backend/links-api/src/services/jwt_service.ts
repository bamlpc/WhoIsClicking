import { Cookies, djwt, Service, Inject } from "deps";
//import {serviceCollection} from "./services.ts";

const refreshKey = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
)

const accessKey = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
)

//@Service()
class JwtService {
   
  async refreshToken(id: string) {
    const payload = {
      id: id,
      exp: djwt.getNumericDate(30 * 60), // 30 min expiration time
    };
    return await djwt.create({ alg: "HS512", typ: "JWT" }, payload, refreshKey);
  }

  async accessToken(id: string) {
    const payload = {
      id: id,
      exp: djwt.getNumericDate(2 * 60), // 2 min expiration time
    };
    return await djwt.create({ alg: "HS512", typ: "JWT" }, payload, accessKey);
  }
  
  async verifyAccess(header: string) {
      return await djwt.verify(header!, accessKey);
  }

  async verifyRefresh(cookies: Cookies) {
    const jwt = await cookies?.get("jwt") || "";
    return await djwt.verify(jwt, refreshKey);
  }
}

//serviceCollection.addTransient(JwtService)

export default JwtService;
