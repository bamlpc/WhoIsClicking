import { Application } from "deps";
import router from "./src/routes/routes.ts";
import log from "log";
import loggerMiddleware from "./src/middlewares/logger.ts";
import errorMiddleware from "./src/middlewares/error.ts";
import notFoundMiddleware from "./src/middlewares/notFound.ts";
import timingMiddleware from "./src/middlewares/timing.ts";

const app = new Application();

app.use(loggerMiddleware);
app.use(timingMiddleware);
app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFoundMiddleware);

const URL = (Deno.env.get("URL"));
const PORT = Deno.env.get("PORT");
const VERSION = Deno.env.get("BACKEND_VERSION");  

log.info(`Running backend_${VERSION} on ${URL}:${PORT}...`);

await app.listen({ port: 8000 });
