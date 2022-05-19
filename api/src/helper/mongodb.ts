import { MongoClient } from '../../deps.ts';
/*
class MongoDatabase {

    public client: MongoClient;

    constructor(public dbName: string, public url: string) {
        console.log('Connecting to mongo');
        this.dbName = dbName;
        this.url = url;
        this.client = { } as MongoClient;
    }

    connect(){
        const mongoClient = new MongoClient();
        mongoClient.connect(this.url);
        this.client = mongoClient;
    }

    get getDatabase(){
        return this.client.database(this.dbName);
    }

}

export {MongoDatabase}*/