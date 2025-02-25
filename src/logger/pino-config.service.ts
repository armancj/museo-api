import {Inject, Injectable} from '@nestjs/common';
import {Params, PARAMS_PROVIDER_TOKEN, PinoLogger} from 'nestjs-pino'

@Injectable()
export class PinoConfigService extends PinoLogger {

    constructor(
        @Inject(PARAMS_PROVIDER_TOKEN) params: Params
    ){
        super(params);
    }

    debug(obj: unknown, msg?: string, ...args) {
        super.debug(obj, msg, ...args);
    }

    info(obj: unknown, msg?: string, ...args) {
        this.logger.info(obj, msg, ...args)
    }

    error(obj: unknown, msg?: string, ...args) {
        super.error(obj, msg, ...args);
    }
}
