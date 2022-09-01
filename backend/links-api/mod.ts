import { Application, oakCors, configSync } from "deps";
import { api, user } from "./src/routes/routes.ts";
import log from "log";
import loggerMiddleware from "./src/middlewares/logger.ts";
import errorMiddleware from "./src/middlewares/error.ts";
import notFoundMiddleware from "./src/middlewares/notFound.ts";
import timingMiddleware from "./src/middlewares/timing.ts";

configSync({path: "app.env"});

//TODO: create an interface for state's user id
interface State {
  userId: Object;
}

const app = new Application<State>();

app.use(oakCors({
  credentials: true,
  origin: [/^.+localhost:(3000)$/, /^.+nginx:80$/],
}));

app.use(loggerMiddleware);
app.use(timingMiddleware);
app.use(errorMiddleware);
app.use(api.routes(), api.allowedMethods());
app.use(user.routes(), user.allowedMethods());
app.use(notFoundMiddleware);

const LINKS_API_URL = Deno.env.get("LINKS_URL");

log.info(`Running LINKS-API on ${LINKS_API_URL}...`);

await app.listen({ port: 8000 });
