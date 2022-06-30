import * as reflectMetadata from "https://deno.land/x/reflect_metadata@v0.1.12/mod.ts";
import { ServiceCollection } from "deps";

//dependecy injection
const serviceCollection = new ServiceCollection();

//centralized services to avoid multiple imports
import JwtService from "./jwt_service.ts"
import MongoService from "./mongodb_services.ts"
import AuthController from "../controller/auth_controller.ts"

export {serviceCollection, JwtService, MongoService, AuthController};
