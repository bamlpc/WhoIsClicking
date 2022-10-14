import { Router } from "deps";
import generateLinks from "../controller/links_controller.ts";
import healthCheck from "../controller/healthcheck_controller.ts";
import preys from "../controller/preys_controller.ts";
import testScan from "../controller/testScan_controller.ts";
import qrGen from "../controller/qrGenerator_controller.ts";
import LoginValidation from "../validations/login_validation.ts";
import RegisterValidation from "../validations/register_validation.ts";
import authMiddleware from "../middlewares/authMiddleware.ts";
import hasLinks from "../middlewares/hasLinks.ts"
import tokenRefresh from "../controller/refresh_controller.ts"
import {/*serviceCollection,*/ AuthController, MongoService,JwtService} from "../services/services.ts"
import hasRefreshToken from "../middlewares/hasRefreshToken.ts";

const api = new Router();
const user = new Router();

api.prefix("/api");
user.prefix("/api/user");

//const authController = serviceCollection.get(AuthController)
const authController = new AuthController(new JwtService(), new MongoService());

api
  .get("/healthcheck", healthCheck)
  .get("/testScan", testScan)
  .get("/generate", generateLinks)
  .get("/prey/:id", preys)
  .post(
    "/register",
    RegisterValidation,
    (ctx) => authController.createUser(ctx),
  )
  .post("/login", LoginValidation, (ctx) => authController.login(ctx))
  user
    //.get("/",...)
    .get("/refresh",hasRefreshToken ,tokenRefresh)
    .post("/logout",hasRefreshToken ,(ctx) => authController.logout(ctx))
    .get("/generate", authMiddleware,hasLinks, generateLinks)
    .post("/qrgenerator", authMiddleware, qrGen)

export { api, user };
