import { Cookies, djwt, Inject, Service } from "deps";
//import serviceCollection from "./services.ts";

const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);
/*
const types = {
    value: Symbol("CryptoKey")
}

@Service()*/
class JwtService {
  // constructor(
  //     @Inject(types.value)
  //     private key: CryptoKey
  // ) {}
  async create(id: number) {
    const payload = {
      id: id,
      exp: djwt.getNumericDate(30 * 60), // 30 min expiration time
    };
    return await djwt.create({ alg: "HS512", typ: "JWT" }, payload, key);
  }

  async temporal(jwt: string) {
    const payload = {
      jwt: jwt,
      exp: djwt.getNumericDate(2 * 60), // 2 min expiration time
    };
    return await djwt.create({ alg: "HS512", typ: "JWT" }, payload, key);
  }

  async verify(cookies: Cookies) {
    const jwt = await cookies.get("jwt") || "";

    return await djwt.verify(jwt, key);
  }
}

//serviceCollection.addTransient(JwtService)

export default JwtService;
