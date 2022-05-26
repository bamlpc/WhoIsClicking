import { MongoClient } from 'deps';

const client = new MongoClient;
const DB_NAME = (Deno.env.get('DB_NAME') || 'todo');
const MONGO_URL = (Deno.env.get('MONGO_URL') || 'mongodb://localhost:27017');

await client.connect(MONGO_URL);
const mongoDatabase = client.database(DB_NAME);

export default mongoDatabase;

