import winston from "winston";

export class Logger {
    private readonly _logger: winston.Logger;
    constructor() {
        this._logger = winston.createLogger({ transports: new winston.transports.Console() });
    }

    info(message: string, ...meta: any[]) {
        this._logger.info(message, ...meta);
    }
    log(message: string, ...meta: any[]) {
        this.info(message, ...meta);
    }
}

const logger = new Logger();
