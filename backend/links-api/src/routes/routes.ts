import { Router } from "deps";
import AuthController from "../controller/auth_controller.ts";
import generateLinks from "../controller/links_controller.ts";
import healthCheck from "../controller/healthcheck_controller.ts";
import preys from "../controller/preys_controller.ts";
import qrGen from "../controller/qrGenerator_controller.ts";
import LoginValidation from "../validations/login_validation.ts";
import RegisterValidation from "../validations/register_validation.ts";
import authMiddleware from "../middlewares/authMiddleware.ts";
import hasLinks from "../middlewares/hasLinks.ts"
import JwtService from "../services/jwt_service.ts";
//import serviceCollection from "../services/services.ts"

const api = new Router();
const user = new Router();

api.prefix("/api");
user.prefix("/api/user");

//const authController = serviceCollection.get(AuthController)
const authController = new AuthController(new JwtService());

api
  .get("/healthcheck", healthCheck)
  .post(
    "/register",
    RegisterValidation,
    (ctx) => authController.createUser(ctx),
  )
  .post("/login", LoginValidation, (ctx) => authController.login(ctx));
user
  .post("/logout", authMiddleware, (ctx) => authController.logout(ctx))
  .get("/generate", authMiddleware,hasLinks, generateLinks)
  .post("/qrgenerator", authMiddleware, qrGen)
  .get("/preys", authMiddleware, preys);

export { api, user };
