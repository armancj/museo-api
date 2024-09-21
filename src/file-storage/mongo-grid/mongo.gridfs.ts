import { GridFSBucket, MongoClient } from 'mongodb';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { apiEnv } from '../../config/app.const';

@Injectable()
export class MongoGridConnection implements OnModuleInit, OnModuleDestroy {
  private static instance: MongoGridConnection;
  private gridFSBucket: GridFSBucket;
  private db: any;
  private client: MongoClient;

  constructor(private readonly configService: ConfigService) {}

  public static getInstance(configService: ConfigService): MongoGridConnection {
    if (!this.instance) {
      this.instance = new MongoGridConnection(configService);
    }
    return this.instance;
  }

  async onModuleInit() {
    await this.connectToMongo();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  private async connectToMongo(): Promise<void> {
    const uri = this.configService.get<string>(apiEnv.database.uri);
    this.client = await MongoClient.connect(uri, {});
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
