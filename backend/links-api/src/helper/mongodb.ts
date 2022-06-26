import { MongoClient } from "deps";

const client = new MongoClient();
const DB_NAME = Deno.env.get("DB_NAME");
const DB_USER = Deno.env.get("MONGODB_USER");
const DB_PASS = Deno.env.get("MONGODB_PASS");
const MONGO_URL = Deno.env.get("MONGODB_URL");

//This will connect to a local mongodb
const MONGO_CONNECTION = `mongodb://${DB_USER}:${DB_PASS}@${MONGO_URL}/${DB_NAME}`;

//This will connect to an atlas mongodb
//const MONGO_CONNECTION = `mongodb+svr://${DB_USER}:${DB_PASS}@${MONGO_URL}/?directConnection=true&authSource=${DB_NAME}&appName=mongosh+1.4.2`;


await client.connect(MONGO_CONNECTION);
const mongoDatabase = client.database(DB_NAME);

export default mongoDatabase;
