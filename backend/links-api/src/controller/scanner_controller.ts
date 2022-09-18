import log from "log";
import { RouterContext } from "deps";
import {/*serviceCollection,*/ MongoService} from "../services/services.ts"

const scanner = async ({ request, response, state }: RouterContext<"/scanner">) => {

    try {
        let preyInfo = {
          agent: request.headers.get('user-agent'), // User Agent we get from headers
          referrer: request.headers.get('referrer'), //  Likewise for referrer
          ip: request.headers.get('x-forwarded-for') || request.ip, // Get IP - allow for proxy
        };
        const _response = {
          success: true,
          prey: preyInfo,
        };
        response.body = JSON.stringify(_response);
    
      } catch (error) {
        log.error(error);
        response.body = {
          success: false,
          error,
        };
      }

};

export default scanner;