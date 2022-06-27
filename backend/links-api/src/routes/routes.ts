import { Router } from "deps";
import AuthController from "../controller/auth_controller.ts"
import generateLinks from "../controller/links_controller.ts";
import healthCheck from "../controller/healthcheck_controller.ts";
import qrGen from "../controller/qrGenerator_controller.ts"
import LoginValidation from "../validations/login_validation.ts";
import RegisterValidation from "../validations/register_validation.ts";
import authMiddleware from "../middlewares/authMiddleware.ts"
import JwtService from "../services/jwt_service.ts"

const router = new Router();
const authController = new AuthController(new JwtService());

router
    .get("/healthcheck", healthCheck)
    .get("/generate", generateLinks)
    .post("/register",RegisterValidation , ctx => authController.createUser(ctx))
    .post("/login",LoginValidation , ctx => authController.login(ctx))
//    .get("/user",authMiddleware, ctx => authController.user(ctx))
    .post("/logout",authMiddleware, ctx => authController.logout(ctx))
    .post("/qrgenerator", qrGen)

export default router;
