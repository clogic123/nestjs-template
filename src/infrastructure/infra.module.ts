import { Module } from "@nestjs/common";

import { DB } from "./db";

@Module({
    providers: [DB],
})
export class InfraModule {}
