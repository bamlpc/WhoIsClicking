import { MongoClient } from 'deps';


const client = new MongoClient( );
const DB_NAME = Deno.env.get('DB_NAME');
const DB_USER = Deno.env.get('MONGODB_USER');
const DB_PASS = Deno.env.get('MONGODB_PASS');
//const MONGO_URL = Deno.env.get('MONGODB_URL');
// this is what we should use "mongodb://<username>:<password>@localhost:27017/<authDB>");
const MONGO_CONNECTION =  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.adchc.mongodb.net/?authMechanism=SCRAM-SHA-1`;

await client.connect(MONGO_CONNECTION);
const mongoDatabase = client.database(DB_NAME);

export default mongoDatabase;
