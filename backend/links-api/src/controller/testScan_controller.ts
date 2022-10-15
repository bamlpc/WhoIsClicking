import log from "log";
import { RouterContext } from "deps";
import {/*serviceCollection,*/ MongoService} from "../services/services.ts"

const testScan = async ({ request, response, state }: RouterContext<"/testScan">) => {
  // TODO: Move scans to a helper class
    try {
        let preyInfo = {
          agent: request.headers.get('user-agent'), // User Agent we get from headers
          referrer: request.headers.get('referrer'), //  Likewise for referrer
          ip: request.headers.get('x-forwarded-for') || request.ip, // Get IP - allow for proxy
        };
        let apiKey = Deno.env.get("GEOIP_KEY")!;
        let testIp = "188.217.56.21"
        const geoApi = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${testIp}`);
        let isp = await geoApi.json();
        
        const _response = {
          success: true,
          prey: preyInfo,
          isp: isp,
        };
        response.body = JSON.stringify(_response);
        response.headers.set("Content-Type", "application/json");
        
      } catch (error) {
        log.error(error);
        response.body = {
          success: false,
          error,
        };
      }

};

export default testScan;