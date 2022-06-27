import { djwt, Cookies, Service } from "deps";
import serviceCollection from "./services.ts";

const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"],
);

@Service()
class JwtService {

   // const key = Deno.env.get('DJWT_KEY');//TODO: preguntar si es seguro sacarla o si tengo que llarmala individual
    
    async create(id: number) {
        const payload = {
            id: id,
            exp: djwt.getNumericDate(120) // 2 min expiration time
        }
        return await djwt.create({ alg: "HS512", typ:"JWT"}, payload, key);
    }
    
    async verify(cookies: Cookies){
        const jwt = await cookies.get('jwt') || "";
        
        return await djwt.verify(jwt, key);
    }
    
}

serviceCollection.addTransient(JwtService)

export default JwtService;