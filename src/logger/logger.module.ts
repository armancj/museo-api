import { Module } from '@nestjs/common';
import {LoggerModule as LoggerPino} from 'nestjs-pino'
import {PinoConfigService} from "./pino-config.service";
import {ConfigService} from "@nestjs/config";
import {createPinoOptions} from "./pino.config";

@Module({
    imports: [
        LoggerPino.forRootAsync({
            providers: undefined,
            imports: undefined,
            useFactory: (config: ConfigService) => createPinoOptions(config),
            inject:[ConfigService]
        })
    ],
    providers: [PinoConfigService],
    exports: [PinoConfigService]
})
export class LoggerModule {}
