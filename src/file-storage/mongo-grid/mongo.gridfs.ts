import { GridFSBucket, MongoClient } from 'mongodb';
import { ConfigService } from '@nestjs/config';
import { apiEnv } from '../../config/app.const';

export class MongoGridConnection {
  private static instance: MongoGridConnection;

  private gridFSBucket: GridFSBucket;
  private db: any;
  private client: MongoClient;

  private constructor(private readonly configService: ConfigService) {
    this.connectToMongo().then();
  }

  public static getInstance(configService: ConfigService): MongoGridConnection {
    if (!this.instance) {
      this.instance = new MongoGridConnection(configService);
    }
    return this.instance;
  }

  private async connectToMongo(): Promise<void> {
    this.client = await MongoClient.connect(
      this.configService.get<string>(apiEnv.database.uri),
      {},
    );
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
