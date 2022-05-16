// entry point for the proyect
import {Application, Router} from "./deps.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = ctx.request.ip + " 152 " + ctx.request.method;
} )

console.log("Running on http://localhost:8000...");

app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: 8000});


