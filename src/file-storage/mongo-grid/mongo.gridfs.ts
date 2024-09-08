import { GridFSBucket, MongoClient } from 'mongodb';
import configuration from "../../config/configuration";


export class MongoGridConnection {
  private static instance: MongoGridConnection;

  private gridFSBucket: GridFSBucket;
  private db: any;
  private client: MongoClient;

  private constructor() {
    this.connectToMongo();
  }

  public static getInstance(): MongoGridConnection {
    if (!this.instance) {
      this.instance = new MongoGridConnection();
    }
    return this.instance;
  }

  private async connectToMongo(): Promise<void> {
    this.client = await MongoClient.connect(configuration().database.uri, {});
    this.db = this.client.db();
    this.gridFSBucket = new GridFSBucket(this.db);
  }

  public getGridFSBucket(): GridFSBucket {
    return this.gridFSBucket;
  }

  public getDb(): any {
    return this.db;
  }
}
