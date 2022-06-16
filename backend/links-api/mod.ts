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

const LINKS_API_URL = Deno.env.get("LINKS_URL");

log.info(`Running LINKS-API on ${LINKS_API_URL}...`);

await app.listen({ port: 8000 });
