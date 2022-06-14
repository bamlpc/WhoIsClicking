import { Router } from "deps";
import { get as getTodo, post as postTodo } from "../controller/controller.ts";
import generateLinks from "../controller/links_controller.ts";

const router = new Router();

router.get("/", getTodo);
router.post("/", postTodo);

router.get("/generate", generateLinks);

export default router;
