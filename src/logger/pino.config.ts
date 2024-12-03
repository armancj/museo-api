import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import { Params,} from 'nestjs-pino'
import {apiEnv} from "../config/app.const";
import {Options} from "pino-http";


    export const createPinoOptions = (config: ConfigService): Params =>  {
        const logPath = path.join(config.get<string>(apiEnv.app.log_path));

        const pinoHttp: Options = {
            level: config.get<string>('NODE_ENV') === 'production' ? 'info' : 'debug',
            transport: {
                targets: [
                    {
                        target: 'pino-pretty',
                        level: 'debug',
                        options: {
                            colorize: true,
                            translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
                            singleLine: true,
                        },
                    },
                    {
                        target: 'pino/file',
                        level: 'info',
                        options: {
                            destination: path.join(logPath, 'application.log'),
                            mkdir: true,
                        },
                    },
                    {
                        target: 'pino/file',
                        level: 'error',
                        options: {
                            destination: path.join(logPath, 'error.log'),
                            mkdir: true,
                        },
                    },
                ],
            },
        };

        return {pinoHttp}
    }

