import { Module } from '@nestjs/common';
import { LoggerModule as LoggerPino } from 'nestjs-pino'
import { PinoConfigService } from "./pino-config.service";
import { ConfigService } from "@nestjs/config";
import { createPinoOptions } from "./pino.config";
import { ErrorLoggerService } from './error-logger.service';

@Module({
    imports: [
        LoggerPino.forRootAsync({
            providers: undefined,
            imports: undefined,
            useFactory: (config: ConfigService) => createPinoOptions(config),
            inject: [ConfigService]
        })
    ],
    providers: [PinoConfigService, ErrorLoggerService],
    exports: [PinoConfigService, ErrorLoggerService]
})
export class LoggerModule {}
