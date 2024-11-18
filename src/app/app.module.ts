import * as nest from "@nestjs/common";

import { UserModule } from "@/app/user/user.module";
import { InfraModule } from "@/infrastructure/infra.module";

import { HealthController } from "./system/health.controller";

@nest.Module({
    imports: [InfraModule, UserModule],
    controllers: [HealthController],
})
export class AppModule {}
