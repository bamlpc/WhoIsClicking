import { Router } from "deps";
import { get as getTodo, post as postTodo, healthCheck } from "../controller/controller.ts";
import generateLinks from "../controller/links_controller.ts";
import createUser from "../controller/userCreation.ts"
import login from "../controller/login.ts"

const router = new Router();

router.get("/", getTodo);
router.post("/", postTodo);

router.get("/healthcheck", healthCheck);

router.get("/generate", generateLinks);

router.post("/register", createUser);

router.post("/login", login);

export default router;
