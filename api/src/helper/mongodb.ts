import { MongoClient, config } from 'deps';
config({ safe: true, export: true });

const client = new MongoClient();
const DB_NAME = 'Whoisclicking';
const DB_USER = Deno.env.get('MONGODB_USER');
const DB_PASS = Deno.env.get('MONGODB_PASS');
const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.adchc.mongodb.net/?authMechanism=SCRAM-SHA-1`;

await client.connect(MONGO_URL);
const mongoDatabase = client.database(DB_NAME);

export default mongoDatabase;
