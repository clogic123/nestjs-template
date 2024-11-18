import { Module } from "@nestjs/common";

import { DB } from "./db";
import { Logger } from "./logger";

@Module({
    providers: [DB, Logger],
})
export class InfraModule {}
