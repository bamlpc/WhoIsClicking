import { Cookies, djwt, Service, Inject } from "deps";
//import {serviceCollection} from "./services.ts";

const _key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
)

//@Service()
class JwtService {
   
  async create(id: number) {
    const payload = {
      id: id,
      exp: djwt.getNumericDate(30 * 60), // 30 min expiration time
    };
    return await djwt.create({ alg: "HS512", typ: "JWT" }, payload, _key);
  }

  async temporal(jwt: string) {
    const payload = {
      jwt: jwt,
      exp: djwt.getNumericDate(2 * 60), // 2 min expiration time
    };
    return await djwt.create({ alg: "HS512", typ: "JWT" }, payload, _key);
  }

  async verify(cookies: Cookies) {
    const jwt = await cookies.get("jwt") || "";

    return await djwt.verify(jwt, _key);
  }
}

//serviceCollection.addTransient(JwtService)

export default JwtService;
