// entry point for the proyect
import { Application } from "deps";
import router from './src/routes/routes.ts';
import log from "./src/middlewares/logger.ts"


const URL = (Deno.env.get('URL') || 'https://localhost');
const PORT = Deno.env.get('PORT') || 8000;

const app = new Application();

app.addEventListener("error", (event) => {
    log.error(event.error);
  });
  
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch(err) {
      ctx.response.body = "Internal server error";
      throw err;
    }
  });

log.info(`Running on ${URL}:${PORT}...`);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });


