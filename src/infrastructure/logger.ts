import { Injectable, LoggerService } from "@nestjs/common";
import { inspect } from "util";
import winston from "winston";

@Injectable()
export class Logger implements LoggerService {
    private readonly _logger: winston.Logger;
    constructor() {
        this._logger = winston.createLogger({ transports: new winston.transports.Console() });
    }
    error(message: any, ...meta: any[]) {
        this._logger.error(inspect(message, { colors: true }), ...meta);
    }
    warn(message: any, ...meta: any[]) {
        this._logger.warn(inspect(message, { colors: true }), ...meta);
    }
    debug?(message: any, ...meta: any[]) {
        this._logger.debug(inspect(message, { colors: true }), ...meta);
    }
    verbose?(message: any, ...meta: any[]) {
        this._logger.verbose(inspect(message, { colors: true }), ...meta);
    }
    info(message: string, ...meta: any[]) {
        this._logger.info(message, ...meta);
    }
    log(message: string, ...meta: any[]) {
        this.info(message, ...meta);
    }
}
