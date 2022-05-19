// entry point for the proyect
import { Application } from "./deps.ts";
import router from './src/routes/routes.ts';
//import {MongoDatabase} from './src/helper/mongodb.ts';


const URL = (Deno.env.get('URL') || 'https://localhost');
const PORT = (Deno.env.get('PORT') || 8000);
const MONGO_URL = (Deno.env.get('MONGO_URL') || 'mongodb://localhost:27017');

/*const mongoDb = new MongoDatabase('todo', MONGO_URL);

mongoDb.connect();*/

const app = new Application();

router.get("/", (ctx: any) => {
    ctx.response.body = ctx.request.ip + " 152 " + ctx.request.method;
} )

console.log(`Running on ${URL}:${PORT}...`);

app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: PORT });


