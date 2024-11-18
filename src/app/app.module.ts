import * as nest from "@nestjs/common";

import { UserModule } from "@/app/user/user.module";
import { InfraModule } from "@/infrastructure/infra.module";

@nest.Module({
    imports: [InfraModule, UserModule],
})
export class AppModule {}
